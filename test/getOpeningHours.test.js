const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('Não passando argumentos deve retornar um objeto', () => {
    const expects = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expects);
  });
  test('Para os argumentos Monday e 09:00-AM deve retornar a string The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  test('Para os argumentos Tuesday e 09:00-AM deve retornar a string The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  test('Para os argumentos Wednesday e 09:00-PM deve retornar a string The zoo is open', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  test('Para os argumentos Thu e 09:00-AM deve lançar uma exceção com a mensagem The day must be valid. Example: Monday', () => {
    const erro = 'The day must be valid. Example: Monday';
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(erro);
  });
  test('Para os argumentos Friday e 09:00-ZM deve lançar uma exceção com a mensagem The abbreviation must be \'AM\' or \'PM\'', () => {
    const erro = 'The abbreviation must be \'AM\' or \'PM\'';
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(erro);
  });
  test('Para os argumentos Saturday e C9:00-AM deve lançar uma exceção com a mensagem The hour should represent a number', () => {
    const erro = 'The hour should represent a number';
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(erro);
  });
  test('Para os argumentos Sunday e 09:c0-AM deve lançar uma exceção com a mensagem The minutes should represent a number', () => {
    const erro = 'The minutes should represent a number';
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow(erro);
  });
});
