const data = require('../data/zoo_data');

const isManager = (id) => {
  // seu código aqui

  const pessoas = data.employees;
  const gerentes = pessoas.filter((pessoa) => pessoa.managers.includes(id));
  return gerentes.length > 0;
};

const getRelatedEmployees = (managerId) => {
  // seu código aqui
  if (isManager(managerId)) {
    const manager = data.employees;
    const verify = manager.filter((manid) => manid.managers.includes(managerId));
    return verify.map((employe) => `${employe.firstName} ${employe.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
