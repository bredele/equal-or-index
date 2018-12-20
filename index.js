/**
 * Dependencies
 */

const include = require('array-include')


/**
 * Return true if string equal to an other string or array index of an other array.
 *
 * @param {String|Array} arg1
 * @param {String}Array arg2
 * @return {Boolean}
 * @api public
 */

module.exports = (arg1, arg2) => {
  const bool = typeof arg1 === 'string'
  return include(
    bool ? [].concat(arg2) : arg1,
    bool ? arg1 : arg2
  )
}
