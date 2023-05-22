const data = require('../data/zoo_data');

const { species } = data;
const getSpeciesByIds = (...ids) => {
  // seu código aqui.
  if (!ids || !ids.length) {
    return [];
  }
  if (Object.keys(ids).length === 1) {
    return species.filter((animal) => ids.find((id) => animal.id === id));
  }
  return species.filter((animal) => ids.includes(animal.id));
};

module.exports = getSpeciesByIds;
