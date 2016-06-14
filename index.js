/**
 * Singleton maker
 * @param {Object} object — `this` object from creating singletone function
 * @param {String} [name] — name of the instance
 * @returns {Object}
 */
function singletone(object, name) {
  var instance;

  if (!name && object.constructor.name) {
    name = object.constructor.name;
  } else {
    name = name || '';
  }

  var constructor = eval('(function '+ name +'() { return instance; })');

  constructor.prototype = object;

  instance = new constructor();

  instance.constructor = constructor;

  return instance;
}

module.exports = singletone;
