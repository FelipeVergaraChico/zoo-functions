const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  // seu código aqui
  const animals = data.species;
  if (!animal) {
    const Especies = {};
    animals.forEach((animais) => {
      Especies[animais.name] = animais.residents.length;
    });
    return Especies;
  }
  const NomeAnim = Object.values(animal);
  const anim = data.species.find((nome) => nome.name === NomeAnim[0]);
  if (NomeAnim.length === 1) {
    return anim.residents.length;
  }
  if (NomeAnim.length === 2) {
    const animSex = anim.residents.filter((animalFilter) => animalFilter.sex === NomeAnim[1]);
    return animSex.length;
  }
};

module.exports = countAnimals;
