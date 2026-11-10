import assert from 'node:assert/strict';
import test from 'node:test';
import { completions, isSection, resolveCommand } from './commands.ts';

test('normalizes commands and preserves section arguments', () => {
  assert.deepEqual(resolveCommand('  GO   Projects  '), { name: 'go', args: ['projects'] });
  assert.deepEqual(resolveCommand('README'), { name: 'about', args: [] });
});
test('rejects unknown commands, prototype properties, and markup', () => {
  for (const command of ['', 'constructor', '__proto__', '<img src=x onerror=alert(1)>']) {
    assert.equal(resolveCommand(command), undefined);
  }
});
test('completes only supported commands and section destinations', () => {
  assert.deepEqual(completions('ba'), ['bazpos']);
  assert.deepEqual(completions(' go sta'), ['go stack']);
  assert.deepEqual(completions('go '), [
    'go bazpos',
    'go projects',
    'go stack',
    'go work',
    'go contact',
  ]);
  assert.deepEqual(completions('go projects extra'), []);
  assert.deepEqual(completions('about x'), []);
  assert.equal(isSection('contact'), true);
  assert.equal(isSection('constructor'), false);
});
