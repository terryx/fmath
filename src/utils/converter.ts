export default class Converter {
    static toFloat(value: string | number) {
        return typeof value === 'string' ? parseFloat(value) : value
    }
}
