const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["42 555666777", "42 222333444"],
};

cliente.enderecos = [
{
   rua: "R. Dr Orlando Araujo Costa",
    numero: 1931,
    apartamento: true,
    complemento: "ap 1931",
},
];

const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")){
    console.error("Erro. É necessário ter um endereço cadastrado.");
}