const get = ({ base = 0, percent = 0, period = 1 }) => {
  const multiplier = (parseFloat(percent) / 100) + 1.00
  
  let count = 0
  let total = base
  while (count < period) {
    total = total * multiplier

    count += 1
  }

  return total
}

module.exports = { get }
