# Mailman [![Build Status](https://travis-ci.org/sungwoncho/meteor-mailman.svg?branch=master)](https://travis-ci.org/sungwoncho/meteor-mailman)

[![Meteor Icon](http://icon.meteor.com/package/sungwoncho:mailman)](https://atmospherejs.com/sungwoncho/mailman)

Preview emails in a browser instead of sending.

## Install

    meteor add sungwoncho:mailman

## What it does

![](https://cldup.com/HQTH37cPm6.gif)

Whenever an email is sent during development, mailman opens it in your default
browser for you, rather than sending or displaying the content in the console.

mailman is activated automatically in development environment. It is never
compiled to production code.

Currently, mailman can only detect emails sent using Meteor's `email` package.
Detecting email sent via third party API is in the future roadmap. Pull requests
and ideas are encouraged.

## Demo app

The demo app shown in the screenshot is hosted on
[this repository](https://github.com/sungwoncho/meteor-mailman-demo).

## Manual switch

You can call the method `activateMailman` to switch mailman on and off. The
method is available on server in development environment only. You might use
this manual switch in `meteor shell`.

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
