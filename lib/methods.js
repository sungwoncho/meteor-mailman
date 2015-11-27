Meteor.methods({
  activateMailgirl(activate = true) {
    check(activate, Boolean);

    if (typeof Email === 'undefined') {
      console.log("mailgirl could not start because you are not using email package");
      console.log('Please run `meteor add email`');
      return;
    }

    if (activate) {
      Email.send = mailgirl.send;
      console.log('mailgirl is turned on.');
    } else {
      Email.send = mailgirl.originalSend;
      console.log('mailgirl is turned off.');
    }
  }
});
