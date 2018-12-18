
module.exports = (arg1, arg2) => {
  const arr1 = [].concat(arg1)
  if (typeof arg2 === 'string') {
    if (arr1.indexOf(arg2) > -1) return true
  }
  return false
}
