const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Argumento count deve retornar a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('O argumento names deve retornar um array de nomes que possui o nome jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  test('O argumento averageAge deve retornar um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  test('O argumento location deve retornar a string NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  test('O argumento popularity deve retornar um número igual ou maior a 5', () => {
    expect(handlerElephants('popularity')).toBeLessThanOrEqual(5);
  });
  test('O argumento availability deve retornar um array de dias da semana que não contem Monday', () => {
    expect(handlerElephants('availability')).not.toBe('Monday');
  });
  test('Quando não passado um parametro retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  test('Quando passado um argumento vazio deve retornar a string Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });
  test('Passada uma string que não contempla uma funcionalidade deve retornar null', () => {
    expect(handlerElephants('oi')).toBeNull();
  });
});
