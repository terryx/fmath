const origin = ({ base = 0, percent }) => {
  let multiplier = 100
  let p = parseFloat(percent)

  if (p > 0) {
    multiplier += p
  } else {
    multiplier += +p
  }

  return base * (multiplier / 100)
}

module.exports = { origin }
