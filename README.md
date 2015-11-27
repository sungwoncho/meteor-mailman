# mailgirl

Preview emails in a browser instead of sending.

## Install

    meteor add sungwoncho:mailgirl

## Feature

Whenever an email is sent during development, mailgirl opens it in your default
browser for you, rather than sending or displaying the content in the console.

mailgirl is activated automatically in development environment. It is never
compiled to production code.

## Manual switch

You can call the method `activateMailgirl` to switch mailgirl on and off. The
method is available on both server and client in development environment only.

`activateMailgirl` takes a Boolean argument indicating whether you want to turn
it on or off. The argument defaults to `true`.

```js
Meteor.call('activateMailgirl', true);
// => mailgirl is turned on.
Meteor.call('activateMailgirl', false);
// => mailgirl is turned off.

Meteor.call('activateMailgirl');
// => mailgirl is turned on.
```

## Dependency

mailgirl needs `email` package in your app to do its job.

## License

MIT
