# Singletone

Powerful and easy to use JavaScript implementation of the Singleton design pattern.
Creates singleton instance which nobody can to change or replace.

## Examples

```javascript
var singletone = require('singletone');

function Player() {
  var instance = singletone(this);
  Player = instance.constructor;

  this.status = "stopped";

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
```
