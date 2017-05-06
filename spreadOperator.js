// call function with argument using spread operator
function myFunction (x, y, z) {
  console.log(x + y + z)
}
var args = [0, 1, 2]
myFunction(...args)
// 3

// call function with argument using spread operator
function anotherFunction (x, y, z) {
  console.log(x + y + z)
}
var args = [1, 2]
anotherFunction(2, ...args)
// 5

// new array from another array
var fruit = ['apple', 'orange'];
var fruits = ['banana', ...fruit, 'watermelon'];
console.log(fruits)
// [ 'banana', 'apple', 'orange', 'watermelon' ]

// copy an array
var arr = [1, 2, 3]
var newArray = [...arr]
console.log(newArray)
// [ 1, 2, 3 ]

// concat an array
var drink = ['juice', 'milk']
var food = ['meat', 'egg']
var newArray = [...drink, ...food]
console.log(newArray)
// [ 'juice', 'milk', 'meat', 'egg' ]
var newArray = [...food, ...drink]
console.log(newArray)
// [ 'meat', 'egg', 'juice', 'milk' ]

var obj = {'key1': 'value1'}
var array = [...obj]
console.log(array)

var obj = { b:2, c: 3 }
var newObj = { a: 1, ...obj }
console.log(newObj)
