# FMATH
Fmath has several utility math functions.

## Installation and Usage

```sh
npm install @terryx/fmath
```

### Compound Calculator
```js
import { CompoundCalculator } from '@terryx/fmath'

// Calculate compound 200 dollar over 20 years with 5% gain each year
const result = CompoundCalculator.simple(200, 20, 5) // 530.66
```

### Percentage Calculator
```js
import { PercentageCalculator } from '@terryx/fmath'

// Calculate increase/decrease of 2 values
const diff = Pc.difference(500, 850) // 70

// Calculate original value given a percent value
const origin = Pc.origin(1000, -10) // 900
```