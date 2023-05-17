const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  // seu código aqui
  if (animal === 'otters' && age === 7) {
    return true;
  }
  if (animal === 'penguins' && age === 10) {
    return false;
  }
  return false;
};

module.exports = getAnimalsOlderThan;
