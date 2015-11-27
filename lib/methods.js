Meteor.methods({
  activateMailman(activate = true) {
    check(activate, Boolean);

    if (typeof Email === 'undefined') {
      console.log("Mailman could not start because you are not using email package");
      console.log('Please run `meteor add email`');
      return;
    }

    if (activate) {
      Email.send = mailman.send;
      console.log('Mailman is turned on.');
    } else {
      Email.send = mailman.originalSend;
      console.log('Mailman is turned off.');
    }
  }
});
