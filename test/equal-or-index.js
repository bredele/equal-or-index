/**
 * Dependencies
 */

const test = require('tape')
const compare = require('..')

test('should return true if string is contained in array', assert => {
  assert.plan(1)
  assert.equal(
    compare(['olivier', 'gabriel'], 'olivier'),
    true
  )
})

test('should return true if string equal to string', assert => {
  assert.plan(2)
  assert.equal(compare('oliviera', 'olivier'), false)
  assert.equal(compare('olivier', 'olivier'), true)
})
