/**
 * Dependencies
 */

const test = require('tape')
const compare = require('..')

test('array <=> string', assert => {
  assert.plan(2)
  assert.equal(compare(['olivier', 'gabriel'], 'olivier'), true)
  assert.equal(compare('olivier', ['olivier', 'gabriel']), true)
})

test('string <=> string', assert => {
  assert.plan(4)
  assert.equal(compare('oliviera', 'olivier'), false)
  assert.equal(compare('olivier', 'olivier'), true)
  assert.equal(compare('olivier', 'oliviera'), false)
  assert.equal(compare('oliver', 'olivier'), false)
})

test('array <=> array', assert => {
  assert.plan(5)
  assert.equal(compare(['olivier', 'gabriel'], ['olivier', 'gabriel']), true)
  assert.equal(compare(['olivier', 'gabriel'], ['gabriel', 'olivier']), true)
  assert.equal(compare(['olivier', 'gabriel', 'klara'], ['olivier', 'gabriel']), true)
  assert.equal(compare(['olivier', 'gabriel'], ['olivier', 'gabriel', 'klara']), false)
  assert.equal(compare(['olivier'], ['gabriel']), false)
})
