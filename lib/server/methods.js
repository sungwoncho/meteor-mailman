Meteor.methods({
  activateMailman(activate = true) {
    check(activate, Boolean);

    if (! Package.email) {
      mailman.warnNoEmailPackage();
      return false;
    }

    if (activate) {
      Email.send = mailman.send;
      console.log('### Mailman is activated ###');
    } else {
      Email.send = mailman.originalSend;
      console.log('### Mailman is deactivated ###');
    }
  }
});
