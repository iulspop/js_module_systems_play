let helper = require('./helper')

function randomAdder(number) {
  return number + helper.randNum()
}

module.exports = randomAdder