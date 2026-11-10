type Ripple = { x: number; y: number; born: number; strength: number };

/** An isolated ambient field. No DOM/style reads or allocations in the drawing loop. */
export function mountHeroWaveField(host: HTMLElement): () => void {
  const canvas = host.querySelector('canvas');
  const surface = host.parentElement;
  const ctx = canvas?.getContext('2d');
  if (!canvas || !surface || !ctx) return () => {};

  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const compact = matchMedia('(max-width: 47rem)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const abort = new AbortController();
  const { signal } = abort;
  const tau = Math.PI * 2;
  let width = 0;
  let height = 0;
  let ratio = 1;
  let visible = false;
  let pageActive = true;
  let disposed = false;
  let frame = 0;
  let lastStamp = 0;
  let time = 0;
  let color = '';
  let lavender = '';
  let violetStroke: CanvasGradient | string = '';
  let lavenderStroke: CanvasGradient | string = '';
  let opacity = 0;
  let xs = new Float32Array(0);
  let envelope = new Float32Array(0);
  let disturbance = new Float32Array(0);
  const ripples: Ripple[] = [];
  let pointerX = -1;
  let pointerY = -1;
  let lastRipple = -1;

  function palette() {
    const style = getComputedStyle(host);
    color = style.getPropertyValue('--color-accent').trim();
    lavender = style.getPropertyValue('--color-focus').trim();
    opacity = style.colorScheme === 'dark' ? 0.23 : 0.07;
    fadeEdges();
  }
  function fadeEdges() {
    if (!ctx) return;
    const fade = (ink: string) => {
      const gradient = ctx.createLinearGradient(0, 0, width || 1, 0);
      gradient.addColorStop(0, 'transparent');
      gradient.addColorStop(0.16, ink);
      gradient.addColorStop(0.84, ink);
      gradient.addColorStop(1, 'transparent');
      return gradient;
    };
    violetStroke = fade(color);
    lavenderStroke = fade(lavender);
  }

  function draw() {
    if (!ctx || !width || !height) return;
    ctx.clearRect(0, 0, width, height);
    const middle = height * (compact.matches ? 0.43 : 0.58);
    const amplitude = Math.min(height * 0.2, compact.matches ? 100 : 145);
    const count = compact.matches ? 10 : 16;
    const frequency = 1.65 + Math.sin(time * 0.071) * 0.12;
    // Compute the shared, expanding disturbance once per column, not once per line.
    for (let p = 0; p < xs.length; p++) {
      let displacement = 0;
      for (const ripple of ripples) {
        const age = time - ripple.born;
        const distance = Math.hypot(xs[p] - ripple.x, (middle - ripple.y) * 0.8);
        const front = distance - age * 155;
        displacement +=
          Math.sin(front * 0.045) *
          Math.exp(-(front * front) / 12500 - age * 0.95) *
          Math.min(1, age * 5) *
          ripple.strength;
      }
      disturbance[p] = displacement;
    }
    ctx.lineWidth = 0.75;
    for (let line = 0; line < count; line++) {
      const phase = line * 0.27;
      const spread = (line / (count - 1) - 0.5) * amplitude * 0.48;
      const gain = amplitude * (0.72 + 0.16 * Math.sin(time * 0.113 + phase));
      const cycles = frequency + line * 0.026 + Math.sin(time * 0.097 + phase) * 0.04;
      ctx.strokeStyle = line % 3 === 0 ? lavenderStroke : violetStroke;
      ctx.globalAlpha = opacity * (0.66 + 0.34 * Math.sin((line / count) * Math.PI));
      ctx.beginPath();
      for (let p = 0; p < xs.length; p++) {
        const x = xs[p];
        const position = (x / width) * tau;
        const wave =
          Math.sin(position * cycles - time * 0.24 + phase) +
          0.32 * Math.sin(position * (cycles * 1.61) - time * 0.157 + phase * 0.73);
        const y = middle + envelope[p] * (spread + gain * wave + disturbance[p]);
        if (p === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  function running() {
    return (
      !disposed &&
      width > 0 &&
      height > 0 &&
      pageActive &&
      visible &&
      !document.hidden &&
      !reduced.matches
    );
  }
  function tick(stamp: number) {
    frame = 0;
    if (!running()) return;
    const elapsed = stamp - lastStamp;
    if (!lastStamp || elapsed >= 1000 / (compact.matches ? 24 : 30)) {
      time += lastStamp ? Math.min(elapsed, 100) / 1000 : 0;
      lastStamp = stamp;
      while (ripples.length && time - ripples[0].born > 5) ripples.shift();
      draw();
    }
    frame = requestAnimationFrame(tick);
  }
  function sync() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    lastStamp = 0;
    if (running()) frame = requestAnimationFrame(tick);
  }
  function resize() {
    if (disposed || !canvas || !ctx) return;
    width = host.clientWidth;
    height = host.clientHeight;
    // Bound both DPR and total backing pixels on large/high-density displays.
    ratio = Math.min(
      devicePixelRatio || 1,
      compact.matches ? 1.25 : 1.75,
      Math.sqrt(3_000_000 / Math.max(1, width * height)),
    );
    canvas.width = Math.max(1, Math.round(width * ratio));
    canvas.height = Math.max(1, Math.round(height * ratio));
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    if (!width || !height) {
      sync();
      return;
    }
    fadeEdges();
    const points =
      Math.min(compact.matches ? 160 : 280, Math.ceil(width / (compact.matches ? 8 : 6))) + 1;
    xs = new Float32Array(points);
    envelope = new Float32Array(points);
    disturbance = new Float32Array(points);
    for (let p = 0; p < points; p++) {
      const fraction = p / (points - 1);
      xs[p] = fraction * width;
      envelope[p] = Math.sin(fraction * Math.PI) ** 1.8;
    }
    ripples.length = 0;
    pointerX = pointerY = -1;
    draw();
    sync();
  }
  function resetInteraction() {
    pointerX = pointerY = -1;
  }
  function pointerMove(event: PointerEvent) {
    if (!running() || !finePointer.matches || event.pointerType !== 'mouse') return;
    const bounds = host.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const distance = pointerX < 0 ? 12 : Math.hypot(x - pointerX, y - pointerY);
    if (time - lastRipple < 0.16 || distance < 8) return;
    pointerX = x;
    pointerY = y;
    lastRipple = time;
    if (ripples.length >= 6) ripples.shift();
    ripples.push({ x, y, born: time, strength: Math.min(16, 5 + distance * 0.12) });
  }

  const resizeObserver = new ResizeObserver(resize);
  const intersection = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (!visible) {
      ripples.length = 0;
      resetInteraction();
    }
    sync();
  });
  const themeObserver = new MutationObserver(() => {
    palette();
    draw();
  });
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
  resizeObserver.observe(host);
  intersection.observe(host);
  surface.addEventListener('pointermove', pointerMove, { passive: true, signal });
  surface.addEventListener('pointerleave', resetInteraction, { passive: true, signal });
  document.addEventListener(
    'visibilitychange',
    () => {
      ripples.length = 0;
      resetInteraction();
      sync();
    },
    { signal },
  );
  reduced.addEventListener(
    'change',
    () => {
      ripples.length = 0;
      draw();
      sync();
    },
    { signal },
  );
  compact.addEventListener('change', resize, { signal });
  window.addEventListener('resize', resize, { passive: true, signal });
  window.addEventListener(
    'pagehide',
    () => {
      pageActive = false;
      sync();
    },
    { signal },
  );
  window.addEventListener(
    'pageshow',
    () => {
      pageActive = true;
      sync();
    },
    { signal },
  );
  palette();
  resize();

  return () => {
    disposed = true;
    sync();
    abort.abort();
    resizeObserver.disconnect();
    intersection.disconnect();
    themeObserver.disconnect();
    ripples.length = 0;
    // Release the backing store when the custom element is removed.
    canvas.width = canvas.height = 1;
  };
}
