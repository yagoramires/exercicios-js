// const max = 10;
// const min = 1;

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

// function criaMultiplicador(mult) {
//   return function (n) {
//     return n * mult;
//   };
// }

// const duplica = criaMultiplicador(2);
// const triplica = criaMultiplicador(3);
// const quadriplica = criaMultiplicador(4);
// const quintuplica = criaMultiplicador(5);

// console.log(duplica(7));
// console.log(triplica(7));
// console.log(quadriplica(7));
// console.log(quintuplica(7));

// const userName = "Yago";

// function sayName(name) {
//   console.log(name);
// }

// function useSayName() {
//   const userName = "Kleber";
//   sayName(userName);
// }

// useSayName();

// function random() {
//   const num = Math.random() * (5000 - 1000) + 1000;
//   return Math.floor(num);
// }

// function f1(callback) {
//   setTimeout(() => {
//     console.log("função 1");
//     if (callback) callback();
//   }, random());
// }

// function f2(callback) {
//   setTimeout(() => {
//     console.log("função 2");
//     if (callback) callback();
//   }, random());
// }

// function f3(callback) {
//   setTimeout(() => {
//     console.log("função 3");
//     if (callback) callback();
//   }, random());
// }

// f1(() => {
//   f2(() => {
//     f3(() => {
//       console.log("Hello. It's me.");
//     });
//   });
// });

// f1(f1Callback);

// function f1Callback() {
//   f2(f2Callback);
// }

// function f2Callback() {
//   f3(f3Callback);
// }

// function f3Callback() {
//   console.log("Hello World");
// }

// function createPerson(nome, idade, peso, altura) {
//   return {
//     nome,
//     idade,
//     peso,
//     altura,
//     get imc() {
//       return this.peso / this.altura ** 2;
//     },
//     get falaImc() {
//       return `Esta pessoa tem o IMC de: ${this.imc.toFixed(2)}`;
//     },
//   };
// }

// const p1 = createPerson("Yago", 25, 74, 1.7);
// const p2 = createPerson("Nathalia", 25, 67, 1.56);

// console.log(p1.falaImc);
// console.log(p2.falaImc());
