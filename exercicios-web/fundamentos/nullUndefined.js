let valor // não inicializado
console.log(valor);
// undefined, não inicializado

//console.log(valor2);
// is not defined no erro, ou seja, nem declarado isso foi caraio

valor = null
// Aqui diferente de undefined, já esta inicializada, porém não aponta para nenhum endereço na memória, ou seja, ausência de valor, variável vazia
console.log(null);

//console.log(valor.toString()); 
// Erro! Pois você não consele ler uma string de null

const produto = {}
console.log(produto.preco);
// Retorna undefined, pois o produto está setado na memória, só o preço não está definido em produto

//console.log(produto.preco.a)
// Aí sim da um erro! Pois não tem uma propriedade a de algo que não está definido, undefined

console.log(produto);
// Produto está vazio, normal

produto.preco = "R$ " + 3.50
console.log(produto);
// Tudo ok

// Agora para dizer que um produto está sem preço
produto.preco = null
console.log(produto);
// Preço null ou de graça 

delete produto.preco
produto.nome = "Arroz"
produto.preco = "R$ " + 5.00
console.log(produto)
// SHOW DE BOLA CARAIO, PROGRAMAR É LINDO!