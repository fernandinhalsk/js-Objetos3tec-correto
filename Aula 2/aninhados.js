const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["42 555666777", "42 222333444"],
};

cliente.endereco = {
    rua: "R. Dr Orlando Araujo Costa",
    numero: 1931,
    apartamento: true,
    complemento: "ap 1931",
};

console.log(cliente);

console.log(cliente["endereco"]);''