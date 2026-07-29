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

for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function"){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}