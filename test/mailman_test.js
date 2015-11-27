Tinytest.add('activateMailman - returns false if no Email package is used', function (test) {
  let result = Meteor.call('activateMailman', true);
  test.isFalse(result);
});
