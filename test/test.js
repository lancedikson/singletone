var should = require('should');
var singletone = require('../index');
var currentTrack = 'Chris Singleton - Tonight';
/**
 * Singleton constructor
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

function Player2() {
  var instance = singletone(this);
  Player2 = instance.constructor;

  this.s = "stopped";

  return instance;
}

Player2.prototype.play = function () {
  this.s = "playing";
};

Player2.prototype.stop = function () {
  this.s = "stopped";
};

var playerInstance = new Player();
var playerInstance2 = new Player2();

playerInstance.constructor.prototype.currentTrack = currentTrack;

describe('Singletone', function() {
  it('should return instance for each creation', function () {

    var playerInstance2 = new Player();
    playerInstance.should.be.deepEqual(playerInstance2);

  });

  it('should contain prototype defined properties', function () {
    playerInstance.status.should.be.equal('stopped');
    playerInstance2.s.should.be.equal('stopped');

    playerInstance.play();
    playerInstance.status.should.be.equal('playing');
    playerInstance2.s.should.be.equal('stopped');

    playerInstance.stop();
    playerInstance.status.should.be.equal('stopped');
    playerInstance2.s.should.be.equal('stopped');
  });

  it('should have the same constructor', function () {
    playerInstance.constructor.should.be.equal(Player);
  });

  it('should have name of constructor', function () {
    playerInstance.constructor.name.should.be.equal('Player');
  });

  it('should have property assigned by constructor\'s prototype', function () {
    playerInstance.currentTrack.should.be.equal(currentTrack);
  });
});
