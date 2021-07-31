const rabbit = require('./deepModuleTest.js')

function happy(turtle) {
  rabbit()
  console.log(turtle)
}

console.log(module)

module.exports = { happy, turtle : "slow is steady"};