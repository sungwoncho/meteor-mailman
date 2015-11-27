mailman = {};

mailman.warnNoEmailPackage = function () {
  console.log("mailman could not start because you are not using email package");
  console.log('Please run `meteor add email`');
};
