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

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};

console.log(encomenda);