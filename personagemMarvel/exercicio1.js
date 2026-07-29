const lista = require("./personagemMarvel/personagemM.json");

function filtrarApartamentos(lista) {
  return lista.filter(p => p.endereco.apartamento === true);
}

// Teste:
console.log(filtrarApartamentos(personagens));