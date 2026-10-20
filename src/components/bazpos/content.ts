export const bazposContent = {
  es: {
    title: 'BazPOS: del mostrador al inventario.',
    intro: 'Todo conectado.',
    description:
      'Un punto de venta para repuestos automotrices: ventas, stock por ubicación, compras y reportes en una misma aplicación.',
    back: 'Volver al portafolio',
    demo: 'Probar demo',
    watch: 'Ver el recorrido',
    note: 'Acceso sin registro como Vendedor o Gerente. Datos ficticios y compartidos, con restauración diaria.',
    videoTitle: 'Una venta. Todo el recorrido.',
    videoDescription:
      'Una grabación real de la demo: desde la búsqueda de un repuesto hasta el inventario y los reportes. Sin voz; activa los subtítulos para seguir cada paso.',
    original: 'Interfaz original en español · Demostración con datos ficticios',
    videoFallback: 'Tu navegador no puede reproducir este video.',
    download: 'Descargar el recorrido en MP4',
    transcript: 'Leer el resumen del recorrido',
    transcriptBody:
      'Entramos como Gerente, buscamos un filtro y lo agregamos al carrito. Seleccionamos boleta y pago en efectivo, y guardamos la venta. Después abrimos el inventario por ubicación y consultamos los reportes de la tienda ficticia.',
    tourTitle: 'Del repuesto al resultado.',
    steps: [
      {
        title: 'Encuentra. Vende. Registra.',
        text: 'Busca por código, OEM o nombre, añade el producto al carrito y registra el pago. La venta conecta el mostrador con los movimientos de inventario.',
        image: 'venta',
        alt: 'Confirmación de una venta ficticia en BazPOS, con producto, boleta, efectivo y total.',
      },
      {
        title: 'El stock tiene su lugar.',
        text: 'Consulta las existencias por ubicación y el historial de movimientos. El inventario forma parte del mismo flujo de trabajo que las ventas.',
        image: 'inventario',
        alt: 'Inventario de la demo de BazPOS con productos y existencias por ubicación.',
      },
      {
        title: 'Lee lo que pasa en la tienda.',
        text: 'Explora ventas, medios de pago y reportes con el rol Gerente. La demostración incluye actividad ficticia para recorrer la aplicación con contexto.',
        image: 'reportes',
        alt: 'Panel de reportes de BazPOS con filtros y resultados de la tienda ficticia.',
      },
    ],
    technicalTitle: 'De la interfaz al despliegue.',
    technicalIntro:
      'React en el navegador. Django en la lógica de negocio. MariaDB para los datos. Una aplicación que también permite mirar las decisiones detrás de cada operación.',
    layers: [
      ['React', 'Interfaz · SPA'],
      ['Django / DRF', 'API · lógica de negocio'],
      ['MariaDB', 'Datos · transacciones'],
    ],
    decisions: [
      [
        'Stock y concurrencia',
        'Transacciones y bloqueos de filas con select_for_update para coordinar las operaciones que modifican inventario.',
      ],
      [
        'Permisos por rol',
        'JWT con renovación de tokens. Vendedor, Bodeguero, Encargado y Gerente, con permisos comprobados en el backend.',
      ],
      [
        'Estado del servidor',
        'React Router para la navegación y TanStack Query para consultas, caché y actualización de datos.',
      ],
      [
        'Una demo aislada',
        'React servido por nginx, Django y MariaDB en Docker Compose. Acceso al homeserver mediante Cloudflare Tunnel y restauración diaria de los datos de demostración.',
      ],
    ],
    source: 'Ver código de BazPOS',
    footer: 'Proyecto de Nicolás Bazaes',
  },
  en: {
    title: 'BazPOS: from counter to inventory.',
    intro: 'Everything connected.',
    description:
      'A point-of-sale application for automotive parts: sales, stock by location, purchasing, and reports in one place.',
    back: 'Back to portfolio',
    demo: 'Try the demo',
    watch: 'Watch the walkthrough',
    note: 'No registration required. Enter as a Salesperson or Manager. Shared fictional data, restored daily.',
    videoTitle: 'One sale. The complete workflow.',
    videoDescription:
      'A real recording of the demo, from finding a part to inventory and reports. No narration; enable captions to follow each step.',
    original: 'Original interface in Spanish · Demonstration with fictional data',
    videoFallback: 'Your browser cannot play this video.',
    download: 'Download the MP4 walkthrough',
    transcript: 'Read the walkthrough summary',
    transcriptBody:
      'We enter as a Manager, search for a filter, and add it to the cart. We select a receipt and cash payment, then save the sale. Next, we open inventory by location and explore reports for the fictional store.',
    tourTitle: 'From the part to the result.',
    steps: [
      {
        title: 'Find it. Sell it. Record it.',
        text: 'Search by code, OEM, or name, add a product to the cart, and record payment. Each sale connects the counter with inventory movements.',
        image: 'venta',
        alt: 'Confirmation of a fictional BazPOS sale showing a product, receipt, cash payment, and total.',
      },
      {
        title: 'Stock has its place.',
        text: 'Check quantities by location and review movement history. Inventory is part of the same workflow as sales.',
        image: 'inventario',
        alt: 'BazPOS demo inventory showing products and stock by location.',
      },
      {
        title: 'Understand the store.',
        text: 'Explore sales, payment methods, and reports as a Manager. Fictional activity provides context for exploring the application.',
        image: 'reportes',
        alt: 'BazPOS reports with filters and results for the fictional store.',
      },
    ],
    technicalTitle: 'From interface to deployment.',
    technicalIntro:
      'React in the browser. Django for business logic. MariaDB for data. An application that also makes its engineering decisions worth exploring.',
    layers: [
      ['React', 'Interface · SPA'],
      ['Django / DRF', 'API · business logic'],
      ['MariaDB', 'Data · transactions'],
    ],
    decisions: [
      [
        'Stock and concurrency',
        'Transactions and row locks with select_for_update coordinate operations that modify inventory.',
      ],
      [
        'Role permissions',
        'JWT with token refresh. Salesperson, Warehouse Staff, Supervisor, and Manager permissions are checked in the backend.',
      ],
      [
        'Server state',
        'React Router for navigation and TanStack Query for requests, caching, and data updates.',
      ],
      [
        'An isolated demo',
        'React served by nginx, with Django and MariaDB in Docker Compose. Cloudflare Tunnel connects to the homeserver; demonstration data is restored daily.',
      ],
    ],
    source: 'View BazPOS source',
    footer: 'A project by Nicolás Bazaes',
  },
} as const;
