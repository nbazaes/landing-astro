import assert from 'node:assert/strict';
import test from 'node:test';
import { completions, isSection, resolveCommand } from './commands.ts';
import { easterEggReply } from './easter-eggs.ts';

const hiddenCommands = [
  'sudo',
  'sudo su',
  'rm -rf /',
  'rm -rf node_modules',
  'sudo make me a sandwich',
  'exit',
  'reboot',
  'uptime',
  'whoami',
  'pwd',
  'ls -a',
  'cat .env',
  'chmod 777 /',
  'kill -9 bugs',
  'git blame',
  'git push --force',
  'git status',
  'docker ps',
  'docker compose up',
  'ping',
  'ping google.com',
  'curl coffee',
  'free -h',
  'top',
  'vim',
  ':q',
  'help me',
  'deploy friday',
  'it works on my machine',
  '42',
];

test('all 30 hidden jokes have replies in both languages and normalize whitespace and case', () => {
  assert.equal(hiddenCommands.length, 30);
  for (const command of hiddenCommands) {
    for (const locale of ['es', 'en']) {
      const reply = easterEggReply(command, locale);
      assert.ok(reply?.length, `${command} (${locale})`);
      assert.equal(
        easterEggReply(`  ${command.toUpperCase().replaceAll(' ', '   ')}  `, locale),
        reply,
      );
    }
  }
  assert.match(easterEggReply('git blame', 'es'), /Fue Nicolás/);
  assert.match(easterEggReply('git blame', 'en'), /It was Nicolás/);
});

test('jokes require exact phrases and remain hidden from completion', () => {
  for (const command of [
    'help',
    'projects',
    'sudo unknown',
    'rm -rf / extra',
    'constructor',
    '__proto__',
    '<script>',
  ]) {
    assert.equal(easterEggReply(command, 'es'), undefined);
  }
  for (const command of hiddenCommands) assert.ok(!completions('').includes(command));
  assert.notEqual(easterEggReply('help me', 'es'), easterEggReply('help', 'es'));
});

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
