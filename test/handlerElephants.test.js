/* eslint-disable no-undef */
const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  It('o Argumento count deve retornar o numero inteiro 4', () => {
    expect(handlerElephants());
  });
});
