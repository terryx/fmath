import test from 'ava'
import { PercentageCalculator as Pc } from '../src/index'

test('calculate increase/decrease of 2 values', t => {
    t.is(Pc.difference(11154.35, 11170.43), 0.14)
    t.is(Pc.difference('11154.35', '11170.43'), 0.14)
    t.is(Pc.difference(11170.43, 11154.35), -0.14)
    t.is(Pc.difference('11170.43', '11154.35'), -0.14)
})

test('calculate original value given a percent value', t => {
    t.is(Pc.origin(1000, -10), 900)
    t.is(Pc.origin(1000, 0), 1000)
    t.is(Pc.origin(1000, 10), 1100)
})
