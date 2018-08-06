const test = require('ava')
const { compound } = require('../libs/index')

test('compound value by interest over period', t => {
  t.is(compound.get({ base: 0, percent: 5, period: 20 }), 0)

  // 200 with 5 percent gain over 20 years
  t.is(compound.get({ base: 200, percent: 5, period: 20 }), 530.6595410288845)

  // 500 with 5 percent gain over 54 weeks
  t.is(compound.get({ base: 500, percent: 5, period: 54 }), 6969.348055416141)

  // 6000 with 5 percent gain over 10 years
  t.is(compound.get({ base: 6000, percent: 7, period: 10 }), 11802.908143737397)
})
