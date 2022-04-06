const max = 10
const min = 1

// let num1 = Math.floor(Math.random() * (max - min) + min)
// let num2 = Math.floor(Math.random() * (max - min) + min)

// // console.log(num1, num2)

// function returnHigher(n1, n2) {
//   console.log(`Num 1: ${n1} & Num 2: ${n2}`)

//   if (n1 > n2) return console.log('Maior num 1: ' + n1)
//   if (n2 > n1) return console.log('Maior num 2: ' + n2)
//   if (n1 === n2) return console.log('Números Iguais!')

// }

// returnHigher(num1, num2)


// function returnRed(x, y) {
  //   return x>y ? x : y
  // }
  
  // console.log(returnRed(num1, num2))
  
  // const vMax = (x,y) => x < y ? y : x
// console.log(vMax(num1, num2))


// function ePaisagem(w, h) {
  //   if (w > h) return console.log('Paisagem')
  //   if (h > w) return console.log('Retrato')
  //   if (h === w) return console.log('Quadrado')
  // }
  
  
// const ePaisagem = (w, h) => w > h

// console.log(ePaisagem(1980, 1080))
// console.log(ePaisagem(1080, 1980))


// let x = Math.floor(Math.random() * (max - min) + min)
// x = 0

// function FizzBuzz(x) {
//   if (typeof x !== 'number') return `String: ${x}`
//   if (x % 3 === 0 && x % 5 === 0) return 'FizzBuz'
//   if (x % 3 === 0) return 'Fizz'
//   if (x % 5 === 0) return 'Buzz'
//   if (x % 3 !== 0 && x % 5 !== 0) return x
  
// }

// for (let i = 0; i <= 100; i++){
//   console.log(i, FizzBuzz(i))
// }

// console.log('                           ')
// console.log('####### WHILE #########')
// console.log('                           ')

// while (x <= 100) {
//   console.log(x, FizzBuzz(x))
//   x++
// }
// console.log('                           ')
// console.log('####### DO WHILE #########')
// console.log('                           ')

// x = 0
// do {
//   console.log(x, FizzBuzz(x))
//   x++
// } while (x <= 100)


// function returnHour (data) {
//   if (data && !(data instanceof Date )) {
//     throw new TypeError('Esperando instância de Date')
//   }

//   if (!data) {
//     data = new Date()
//   }

//   return data.toLocaleString('pt-br', {
//     hours12: false,
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit'
//   })
// }


// try {
  
//   const hora = returnHour('a')
//   console.log(hora)
// } catch (e) {
//   // console.log(e)
// } finally {
//   console.log('Have a nice day!')
// }

