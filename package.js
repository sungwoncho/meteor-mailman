Package.describe({
  name: 'sungwoncho:mailman',
  version: '0.1.0',
  summary: 'preview emails in a browser instead of sending',
  git: '',
  documentation: 'README.md',
  debugOnly: true
});

Npm.depends({
  'open': '0.0.5',
  'mkdirp': '0.5.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
    'ecmascript',
    'check'
  ]);

  api.use('email', {weak: true});

  api.addFiles([
    'lib/server/mailman.js'
  ], 'server');

  api.addFiles([
    'lib/namespace.js',
    'lib/methods.js'
  ], ['server', 'client']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('sungwoncho:mailman');
  api.addFiles('test/mailman-tests.js');
});
