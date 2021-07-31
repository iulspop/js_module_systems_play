let randomAdder = require('./random-adder')
let helper = require('./helper')

let originalrandNum = helper.randNum
helper.randNum = () => 4

let result = randomAdder(1)
console.log(result) //=== 5

helper.randNum = originalrandNum
