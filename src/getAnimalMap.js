const data = require('../data/zoo_data');

const { species } = data;

function getAnimals(residents, sex, sorted) {
  const animals = residents.filter((resident) =>
    !sex || resident.sex === sex).map((resident) => resident.name);

  if (sorted) {
    animals.sort();
  }

  return animals;
}

function getAnimalMap(options = {}) {
  const animalMap = { NE: [], NW: [], SE: [], SW: [] };

  species.forEach(({ location, name, residents }) => {
    const animalEntry = options.includeNames
      ? { [name]: getAnimals(residents, options.sex, options.sorted) }
      : name;

    animalMap[location].push(animalEntry);
  });

  return animalMap;
}

module.exports = getAnimalMap;
