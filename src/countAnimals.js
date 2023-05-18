const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  // seu código aqui
  const animals = data.species;
  const finds = animals.find((name) => name.name === animal);
  const counts = animals.map((f) => f.residents === finds);
  return counts;
};

module.exports = countAnimals;
