# Mailman [![Build Status](https://travis-ci.org/sungwoncho/meteor-mailman.svg?branch=master)](https://travis-ci.org/sungwoncho/meteor-mailman)

[![Meteor Icon](http://icon.meteor.com/package/sungwoncho:mailman)](https://atmospherejs.com/sungwoncho/mailman)

Preview emails in a browser instead of sending.

## Install

    meteor add sungwoncho:mailman

## Feature

Whenever an email is sent during development, mailman opens it in your default
browser for you, rather than sending or displaying the content in the console.

mailman is activated automatically in development environment. It is never
compiled to production code.

## Manual switch

You can call the method `activateMailman` to switch mailman on and off. The
method is available on server in development environment only.

`activateMailman` takes a Boolean argument indicating whether you want to turn
it on or off. The argument defaults to `true`.

```js
Meteor.call('activateMailman', true);
// => mailman is turned on.
Meteor.call('activateMailman', false);
// => mailman is turned off.

Meteor.call('activateMailman');
// => mailman is turned on.
```

## Dependency

mailman needs `email` package in your app to do its job.

## License

MIT
