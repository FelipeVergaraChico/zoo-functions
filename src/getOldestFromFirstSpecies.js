const data = require('../data/zoo_data');

const { species, employees } = data;

const getOldestFromFirstSpecies = (id) => {
  // seu código aqui
  const idDoAnimalResponsavel = employees.find((funcionario) =>
    funcionario.id === id).responsibleFor[0];
  const animalFind = species.find((bichos) => bichos.id === idDoAnimalResponsavel).residents;
  const older = animalFind.reduce((bicho1, bicho2) => {
    if (bicho1.age > bicho2.age) {
      return bicho1;
    }
    return bicho2;
  });
  return Object.values(older);
};

module.exports = getOldestFromFirstSpecies;
