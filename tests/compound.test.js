const test = require('ava')
import { CompoundCalculator as cc } from '../src'

test('compound value by interest over period', t => {
    t.is(cc.simple(0, 20, 0), 0)

    // 200 with 5 percent gain over 20 years
    t.is(cc.simple(200, 20, 5), 530.66)

    // 500 with 5 percent gain over 54 weeks
    t.is(cc.simple(500, 54, 5), 6969.35)

    // 6000 with 5 percent gain over 10 years
    t.is(cc.simple(6000, 10, 7), 11802.91)
})