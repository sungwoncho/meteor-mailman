Tinytest.add('activateMailgirl - returns false if no Email package is used', function (test) {
  let result = Meteor.call('activateMailgirl', true);
  test.isFalse(result);
});
