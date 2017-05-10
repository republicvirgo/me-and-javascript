// case 1
// for (var i = 0; i < 5; i++) {
//   console.log(i)
// }
// console.log('after loop', i) // this i = 5


// case 2
// function counter () {
//   for (var i = 0; i < 5; i++) {
//     console.log(i)
//   }
// }
// counter()
// console.log('after loop', i) // this i is undefined

// case 3
// function counter () {
//   for (var i = 0; i < 5; i++) {
//     console.log(i)
//   }
//   var afterLoop = function () {
//     console.log('after loop inside function = ', i) // i = 5
//   }
//   afterLoop()
// }
// counter()
// console.log('after loop', i) // this i is undefined

// case 5
// for (let i = 0; i < 5; i++) {
//   console.log(i) // 0 1 2 3 4
// }
// console.log('after loop', i) // this i is undefined

// case 6
// for (let i = 0; i < 5; i++) {
//   console.log(i) // 0 1 2 3 4
// }
// if (true) {
//   let i = 1000
//   console.log(i) // this i = 1000
// }
// console.log('after loop', i) // this i is undefined

// case 7
// if (true) {
//   let i = 10
//   i = 2
//   console.log(i) // this i = 2
// }
// if (true) {
//   const i = 10
//   i = 2
//   console.log(i) // this i = 10
// }
