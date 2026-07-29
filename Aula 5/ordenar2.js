const clientes = require("./cliente.json");

function ordenar(lista, propriedade) {
  // Criamos uma cópia com [...lista] para não modificar o array original durante o teste
  const resultado = [...lista].sort((a, b) => {
    console.log(`\n🔄 Comparando: "${a[propriedade]}" VS "${b[propriedade]}"`);

    if (a[propriedade] < b[propriedade]) {
      console.log(`   ➡️ "${a[propriedade]}" vem antes. Retornando -1`);
      return -1;
    }
    if (a[propriedade] > b[propriedade]) {
      console.log(`   ⬅️ "${b[propriedade]}" vem antes. Retornando 1`);
      return 1;
    }
    console.log(`   ⚖️ Iguais. Retornando 0`);
    return 0;
  });

  return resultado;
}

const ordenadoNome = ordenar(clientes, "nome");

console.log("\n✨ RESULTADO FINAL ORDENADO:");
console.log(ordenadoNome);