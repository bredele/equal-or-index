
/**
 * Return true if string equal to an other string or array index of an other array.
 *
 * @param {String|Array} arg1
 * @param {String}Array arg2
 * @return {Boolean}
 * @api public
 */

module.exports = (arg1, arg2) => {
  const arr1 = [].concat(arg1)
  if (typeof arg2 === 'string') {
    if (arr1.indexOf(arg2) > -1) return true
  } else {
    if (typeof arg1 === 'string') return arg2.indexOf(arg1) > -1
    else return contains(arg2, arr1)
  }
  return false
}

/**
 * Return true if all items of arr1 are index of arr2.
 *
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Boolean}
 * @api private
 */

function contains (arr1, arr2) {
  let result = true
  let l = arr1.length
  while (l--) {
    result = result && arr2.indexOf(arr1[l]) > -1
  }
  return result
}
