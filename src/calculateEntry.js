const data = require('../data/zoo_data');

const contaChildren = (entr) => {
  const child = entr.filter((pessoa) => pessoa.age < 18);
  return child.length;
};
const contaAdulto = (entr) => {
  const adulto = entr.filter((pessoa) => pessoa.age >= 18 && pessoa.age < 50);
  return adulto.length;
};
const contaSenhor = (entr) => {
  const senhor = entr.filter((pessoa) => pessoa.age >= 50);
  return senhor.length;
};
const countEntrants = (entrants) => {
  // seu código aqui
  const child = contaChildren(entrants);
  const adult = contaAdulto(entrants);
  const senior = contaSenhor(entrants);
  return { adult, child, senior };
};

const calculaAdulto = (preço) => data.prices.adult * preço;
const calculaCrianca = (preço) => data.prices.child * preço;
const calculaSenhor = (preço) => data.prices.senior * preço;
const calculateEntry = (entrants) => {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const count = countEntrants(entrants);
  const adulto = calculaAdulto(count.adult);
  const senhor = calculaSenhor(count.senior);
  const criança = calculaCrianca(count.child);
  const soma = (adulto + senhor + criança).toFixed(2);
  return parseFloat(soma);
};

module.exports = { calculateEntry, countEntrants };
