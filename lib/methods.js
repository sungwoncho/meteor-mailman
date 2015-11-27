Meteor.methods({
  switchMailman(on = true) {
    check(on, Boolean);

    if (typeof Email === 'undefined') {
      console.log("Mailman could not start because you are not using email package");
      console.log('Please run `meteor add email`');
      return;
    }

    if (on) {
      Email.send = mailman.send;
    } else {
      Email.send = mailman.originalSend;
    }
  }
});
