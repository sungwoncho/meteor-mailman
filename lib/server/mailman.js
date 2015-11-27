let fs = Npm.require('fs');
let path = Npm.require('path');
let mkdirp = Npm.require('mkdirp');
let open = Npm.require('open');

function writeFile(filePath, data, done) {
  mkdirp(path.dirname(filePath), function (err) {
    if (err) return done(err);
    fs.writeFile(filePath, data, done);
  });
}

if (process.env.NODE_ENV === 'development') {
  Meteor.startup(function () {
    if (!Package.email) {
      return;
    }

    mailman.originalSend = Email.send;
    mailman.send = function (options) {
      let emailPath = path.resolve(process.env.PWD, `.tmp/${Date.now()}.html`) ;
      let header = '<b>from:</b>' + options.from + '<br>' + '<b>to:</b>' + options.to + '<br><br>' +
                   '<b>subject:</b>' + options.subject;
      let content = header + options.html;

      writeFile(emailPath, content, function (err) {
        if (err) return console.log(err);

        console.log('### Mailman detected an outgoing email ###');
        open(emailPath);
      });
    };

    Meteor.call('activateMailman', true);
  });
}
