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

// function* geradora() {
//   yield function () {
//     console.log("yield 1");
//   };

//   yield function () {
//     console.log("yield 2");
//   };
// }

// const g1 = geradora();

// const func1 = g1.next().value;
// const func2 = g1.next().value;

// func1();
// func1();
// func2();
// func1();
// func1();

// const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numFilter = num.filter((value) => value > 10);

// console.log(numFilter);

// const pessoas = [
//   { nome: "Yago", idade: 25 },
//   { nome: "Nathalia", idade: 25 },
//   { nome: "Roberto", idade: 43 },
//   { nome: "Fabiola", idade: 46 },
//   { nome: "Luiz Carlos", idade: 47 },
//   { nome: "Maria Luiza", idade: 13 },
//   { nome: "Daniel", idade: 24 },
// ];

// const nomeGrande = pessoas.filter((value) => value.nome.length >= 7);
// console.log(nomeGrande);

// const maiorque40 = pessoas.filter((value) => value.idade >= 40);
// console.log(maiorque40);

// const terminacomA = pessoas.filter((value) =>
//   value.nome.toLowerCase().endsWith("a")
// );
// console.log(terminacomA);

// const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const dobro = num.map((v) => v * 2);
//console.log(dobro);

// const pessoas = [
//   { nome: "Yago", idade: 25 },
//   { nome: "Nathalia", idade: 25 },
//   { nome: "Roberto", idade: 43 },
//   { nome: "Fabiola", idade: 46 },
//   { nome: "Luiz Carlos", idade: 47 },
//   { nome: "Maria Luiza", idade: 13 },
//   { nome: "Daniel", idade: 24 },
// ];

// const strings = pessoas.map((obj) => obj.nome);
// console.log(strings);

// const nomeRemoveDel = pessoas.map((obj) => {
//   delete obj.nome;
//   return obj;
// });
// console.log(nomeRemoveDel);

// const nomeRemoveNew = pessoas.map((obj) => ({ idade: obj.idade }));
// console.log(nomeRemoveNew);

// const addId = pessoas.map((obj, index) => {
//   return { id: index, ...obj };
// });
// console.log(addId);

// const addIndex = pessoas.map((obj, index) => {
//   obj.id = index + 1;
//   return obj;
// });
// console.log(addIndex);

// const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const total = num.reduce((acc, num) => {
//   acc += num;
//   return acc;
// }, 0);

// console.log(total);

// const pares = num.reduce((acc, num) => {
//   if (num % 2 === 0) acc.push(num);
//   return acc;
// }, []);

// console.log(pares);

// const dobro = num.reduce((acc, valor) => {
//   const mult = valor * 2;
//   acc.push(mult);
//   return acc;
// }, []);

// console.log(dobro);

// const pessoas = [
//   { nome: "Yago", idade: 25 },
//   { nome: "Nathalia", idade: 25 },
//   { nome: "Roberto", idade: 43 },
//   { nome: "Fabiola", idade: 46 },
//   { nome: "Luiz Carlos", idade: 47 },
//   { nome: "Maria Luiza", idade: 13 },
//   { nome: "Daniel", idade: 24 },
// ];

// const maisVelho = pessoas.reduce((acc, obj) => {
//   if (acc.idade > obj.idade) return acc;
//   return obj;
// });

// console.log(maisVelho);

// const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const pares = num.filter((v) => {
//   if (v % 2 === 0) return v;
// });

// const dobro = pares.map((v) => {
//   return v * 2;
// });

// const total = dobro.reduce((acc, v) => {
//   return (acc += v);
// }, 0);
// console.log(total);

// const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// let total = 0;

// a1.forEach((value) => {
//   return (total += value);
// });

// console.log(total);

// const pessoa = {
//   nome: "Yago",
//   sobrenome: "Ramires",
// };

// const key = "nome";

// console.log(pessoa[key]);

// function Produto(nome, preco) {
//   this.nome = nome;
//   this.preco = preco;
// }

// Produto.prototype.desconto = function (percentual) {
//   let percent = percentual / 100;
//   return (this.preco = this.preco - this.preco * percent);
// };

// Produto.prototype.aumento = function (percentual) {
//   let percent = percentual / 100;
//   this.preco = this.preco + this.preco * percent;
// };

// const p1 = new Produto("Yeezy", 1300);
// const p2 = new Produto("Jordan", 1099);

// p1.desconto(5);
// console.log(p1);

// const p3 = {
//   nome: "AirForce",
//   preco: 699,
// };

// Object.setPrototypeOf(p3, Produto.prototype);

// p3.desconto(10);
// console.log(p3);

// function Produto(nome, preco) {
//   this.nome = nome;
//   this.preco = preco;
// }

// Produto.prototype.aumento = function (quantia) {
//   this.preco += quantia;
// };
// Produto.prototype.desconto = function (quantia) {
//   this.preco -= quantia;
// };

// function Camiseta(nome, preco, cor) {
//   Produto.call(this, nome, preco);
//   this.cor = cor;
// }

// const camiseta = new Camiseta("regata", "99", "vermelha");

// function Caneca(nome, preco, material, estoque) {
//   Produto.call(this, nome, preco);
//   this.material = material;

//   Object.defineProperty(this, "estoque", {
//     enumerable: true,
//     configurable: false,
//     get: function () {
//       return estoque;
//     },
//     set: function (valor) {
//       if (typeof valor !== "number") return;
//       estoque = valor;
//     },
//   });
// }

// Caneca.prototype = Object.create(Produto.prototype);
// Caneca.prototype.constructor = Caneca;

// const caneca = new Caneca("Stanley", 199, "Inox", 57);

// console.log(caneca);

// caneca.estoque = "texto";
// console.log(caneca.estoque);
