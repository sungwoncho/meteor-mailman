Package.describe({
  name: 'sungwoncho:mailgirl',
  version: '0.1.0',
  summary: 'Preview emails in a browser instead of sending',
  git: 'https://github.com/sungwoncho/meteor-mailgirl.git',
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
    'lib/server/mailgirl.js',
    'lib/server/methods.js'
  ], 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('sungwoncho:mailgirl');
  api.addFiles([
    'test/mailgirl_test.js'
  ], 'server');
});
