const calc = require("./calculadora");

console.log("=== Calculadora Node.js ===");

console.log("Somar 5 + 3 =", calc.somar(5, 3));
console.log("Subtrair 10 - 4 =", calc.subtrair(10, 4));
console.log("Multiplicar 6 * 7 =", calc.multiplicar(6, 7));
console.log("Dividir 20 / 4 =", calc.dividir(20, 4));
console.log("Dividir 5 / 0 =", calc.dividir(5, 0));
console.log("Ao quadrado de 9 =", calc.aoQuadrado(9));
console.log("Raiz quadrada de 16 =", calc.raizQuadrada(16));
console.log("Raiz quadrada de -9 =", calc.raizQuadrada(-9));