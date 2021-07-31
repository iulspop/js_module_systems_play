let randomAdder = require('./random-adder')
let randNum = require('./helper')

let originalrandNum = randNum
randNum = () => 4

let result = randomAdder(1)
console.log(result) //=== 5

randNum = originalrandNum