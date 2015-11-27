Meteor.methods({
  activateMailman(activate = true) {
    check(activate, Boolean);

    if (! Package.email) {
      console.log("mailman could not start because you are not using email package");
      console.log('Please run `meteor add email`');
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
