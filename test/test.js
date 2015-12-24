var should = require('should');
var singletone = require('../index');

/**
 * Singleton constructor
 * @param videoId
 * @returns {*}
 * @constructor
 */
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

var playerInstance = new Player();

describe('Singllone', function() {
  it('should return instance for each creation', function () {

    var playerInstance2 = new Player();
    playerInstance.should.be.deepEqual(playerInstance2);

  });

  it('should contain prototype defined properties', function () {
    playerInstance.status.should.be.equal('stopped');
    playerInstance.play();
    playerInstance.status.should.be.equal('playing');
    playerInstance.stop();
    playerInstance.status.should.be.equal('stopped');
  });

  it('should have the same constructor', function () {
    playerInstance.constructor.should.be.equal(Player);
  });
});
