/**
 * Singleton maker
 * @param {Object} object `this` object from creating singletone function
 * @returns {Object}
 */
function singletone(object) {
  var instance;

  var constructor = function () {
    return instance;
  };

  constructor.prototype = object;

  instance = new constructor();

  instance.constructor = constructor;

  return instance;
}

module.exports = singletone;
