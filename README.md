# Mailman

Preview emails in a browser instead of sending.

## Install

    meteor add sungwoncho:mailman

## Feature

Whenever an email is sent during development, mailman opens it in your default
browser for you, rather than sending or displaying the content in the console.

Mailman is activated automatically in development environment. It is never
compiled to production code.

## Manual switch

You can call the method `activateMailman` to switch mailman on and off. The
method is available on both server and client in development environment only.

`activateMailman` takes a Boolean argument indicating whether you want to turn
it on or off. The argument defaults to `true`.

```js
Meteor.call('activateMailman', true);
// => Mailman is turned on.
Meteor.call('activateMailman', false);
// => Mailman is turned off.

Meteor.call('activateMailman');
// => Mailman is turned on.
```

## Dependency

mailman needs `email` package in your app to do its job.

## License

MIT
