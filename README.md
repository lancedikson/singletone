[![Build Status](https://travis-ci.org/lancedikson/singletone.svg?branch=master)](https://travis-ci.org/lancedikson/singletone)

# Singletone

Powerful and easy to use JavaScript implementation of the Singleton design pattern.
It creates singleton instance which nobody can to change or replace.
Now it supports Node.js (CommonJS modules) only, but frontend support needed (AMD, etc.). Help wanted.

## Install

`npm i --save singletone`

## Examples

```javascript
var singletone = require('singletone');

function Player() {
  // save the instance local variable for the moment
  var singletonInstance = singletone(this);

  // rewrite our singleton constructor
  Player = singletonInstance.constructor;

  // add some instance properties
  this.status = "stopped";

  // return singleton instance
  return singletonInstance;
}

Player.prototype.play = function () {
  this.status = "playing";
};

Player.prototype.stop = function () {
  this.status = "stopped";
};

var player = new Player();

player.play();

console.log(player.status);
// "playing"

var player2 = Player();

console.log(player2.status);
// "playing"
```

For more information and examples look at the tests.

## Contribution

If you want to send some PR, checkout `develop` branch please. It contains the latest commits.
