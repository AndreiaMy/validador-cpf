/** @jest-environment jsdom */

const { validarCPF } = require("./script")

test('true', function () {
    var resultado = validarCPF('48402283888');
    expect(resultado).toBe(true);
})
test('false', function () {
    var resultado = validarCPF(12345678910);
    expect(resultado).toBe(false);
})