// Importar o código qie vai ser testado
let {calcularNotaA1} = require('./calculadora')

// importe as funcionalidades do JEST
let {describe, expect, test} = require('@jest/globals')

// describe para fazer o agrupamento dos testes
describe('Testando Modulo CalculadoraNota', () => {
    // construir os testes unitários
    test('calculadoraNotaA1 -> ex 1, trb 3, prov 6 = 10', () => {
        expect(calcularNotaA1(1, 3 ,6)).toBe(10)
    })

})