import randomAdder from './random-adder.mjs'
import helper from './helper.mjs'

let originalrandNum = helper.randNum
helper.randNum = () => 4

let result = randomAdder(1)
console.log(result) //=== 5

helper.randNum = originalrandNum
