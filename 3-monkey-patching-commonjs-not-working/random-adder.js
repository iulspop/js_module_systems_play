let randNum = require('./helper')

function randomAdder(number) {
  return number + randNum()
}

module.exports = randomAdder