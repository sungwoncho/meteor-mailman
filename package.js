Package.describe({
  name: 'sungwoncho:mailman',
  version: '0.1.0',
  summary: 'Preview emails in a browser instead of sending',
  git: 'https://github.com/sungwoncho/meteor-mailman.git',
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
    'check',
  ]);

  api.use('email', {weak: true});

  api.addFiles([
    'lib/server/namespace.js',
    'lib/server/mailman.js',
    'lib/server/methods.js'
  ], 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('sungwoncho:mailman');
  api.addFiles([
    'test/mailman_test.js'
  ], 'server');
});
