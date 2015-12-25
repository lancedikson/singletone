# Singletone

Powerful and easy to use JavaScript implementation of the Singleton design pattern.
It creates singleton instance which nobody can to change or replace.

## Examples

```javascript
var singletone = require('singletone');

function Player() {
  // save the instance local variable for the moment
  var instance = singletone(this);

  // rewrite our singleton constructor
  Player = instance.constructor;

  // add some instance properties
  this.status = "stopped";

  // return singleton instance
  return instance;
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
