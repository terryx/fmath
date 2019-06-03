import Converter from './utils/converter'

export class CompoundCalculator {
    static simple(principal: number, period: number, percent: number): number {
        const multiplier = percent / 100 + 1.0

        let count = 0
        let total = principal
        while (count < period) {
            total = total * multiplier

            count += 1
        }

        return Converter.toFloat(total.toFixed(2))
    }
}
