const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  // seu código aqui
  const obj = {};
  const child = entrants.filter((c) => c.age < 18);
  // const child = entrants.reduce((prev, elem) => prev + elem.age);
  return child;
};

const calculateEntry = (entrants) => {
  // seu código aqui
};

module.exports = { calculateEntry, countEntrants };
