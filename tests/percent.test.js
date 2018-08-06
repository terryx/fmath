const test = require('ava')
const { percent } = require('../libs/index')

test('get original value after certain percentage', t => {
  t.is(percent.origin({ base: 1000, percent: -10 }), 900)
  t.is(percent.origin({ base: 1000, percent: 0 }), 1000)
  t.is(percent.origin({ base: 1000, percent: 10 }), 1100)
})
