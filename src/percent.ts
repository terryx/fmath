import Converter from './utils/converter'

export class PercentageCalculator {
    // calculate increase/decrease between original and latest value
    static difference(origin: number | string, latest: number | string, precision: number = 2): number {
        const originVal = Converter.toFloat(origin)
        const latestVal = Converter.toFloat(latest)
        const changes = latestVal > originVal ? (latestVal - originVal) / originVal : -(originVal - latestVal) / latestVal
        const result = (changes * 100).toFixed(precision)

        return parseFloat(result)
    }

    // calculate original value by getting latest value and percent increase/decrease
    static origin(value: number | string, percent: number | string): number {
        let multiplier = 100
        let p = Converter.toFloat(percent)

        if (p > 0) {
            multiplier += p
        } else {
            multiplier += +p
        }

        return Converter.toFloat(value) * (multiplier / 100)
    }
}
