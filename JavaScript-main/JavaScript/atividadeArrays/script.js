/* 1
let participantes = ["Marcos", "Fernanda", "Juliana"];

// 1. Exiba a lista completa de participantes.
console.log(participantes);

// 2. Um novo participante chamado "Gabriel" acabou de se inscrever. Adicione-o ao final da lista.
participantes.push("Gabriel");

//3. A participante "Patrícia" recebeu inscrição prioritária. Adicione-a no início da lista.
participantes.unshift("Patrícia");

// 4. Exiba a quantidade total de participantes cadastrados.
console.log(participantes.length);

// 5. Verifique se o participante "Juliana" está inscrito.
console.log(participantes.includes("Juliana"));

// 6. Verifique se o participante "Carlos" está inscrito.
console.log(participantes.includes("Carlos"));

//7. Descubra em qual posição está o participante "Fernanda".
console.log(participantes.indexOf("Fernanda"));

// 8. Remova o último participante da lista.
participantes.splice(4, 1);

// 9. Exiba a lista atualizada.
console.log(participantes);

// 10. Transforme a lista em uma única string utilizando join(" | ").
let nomes = participantes.join(" | ");
console.log(nomes);
*/


// =========================================================================================


/*2
let pedidos= ["Hambúrguer","Batata Frita","Refrigerante"];

console.log(pedidos);

// 1. Adicione "Milk Shake" ao final.
pedidos.push("Milk Shake")
console.log(pedidos);

// 2. Remova o primeiro pedido.
pedidos.shift()
console.log(pedidos);

// 3. Mostre a quantidade de pedidos.
console.log(pedidos.length);

// 4. Exiba cada pedido utilizando for...of.
for (let pedido of pedidos) {
    console.log(pedido);
}

// 5. Exiba os índices utilizando for...in.
for (let i in pedidos) {
    console.log(i);
}
*/


//=========================================================================================

/*3
let linguagens= ["Java","Python","JavaScript","C#"];

//  1. Ordene as linguagens alfabeticamente.
linguagens.sort();
console.log(linguagens);

// 2. Inverta a ordem.
linguagens.reverse();
console.log(linguagens);

// 3. Crie uma cópia contendo apenas os três primeiros elementos.
linguagens2 = linguagens.slice(0, 3);

// 4. Exiba o array copiado.
console.log(linguagens2);

// 5. Exiba o array original.
console.log(linguagens);
*/


//=========================================================================================


/*4

let equipeFrontend= ["Lucas","Ana"];

let equipeBackend= ["Carlos","Fernanda"];


//1. Una as equipes utilizando concat().
let sistema = equipeFrontend.concat(equipeBackend);
console.log(sistema); 

// 2. Exiba todos os integrantes da equipe completa.
console.log(sistema);

// 3. Mostre a quantidade total de colaboradores.
console.log(sistema.length);

// 4. Percorra a equipe usando forEach().let sistema = equipeFrontend.concat(equipeBackend);
sistema.forEach(function (usuario) {
  console.log(usuario);
});
*/

// =========================================================================================

/*5
let livros= ["Dom Casmurro","O Pequeno Príncipe","1984","Harry Potter"];

// 1. Exiba todos os livros.
console.log(livros);

// 2. Verifique se existe o livro "1984".
console.log(livros.includes("1984"));

// 3. Descubra a posição de "Harry Potter".
console.log(livros.indexOf("Harry Potter"));

// 4. Remova o primeiro livro utilizando shift().
livros.shift();
console.log(livros);

// 5. Adicione "Senhor dos Anéis" ao final.
livros.push("O Senhor dos Anéis");

// 6. Ordene os livros.
livros.sort();
console.log(livros);

//7. Exiba todos os livros usando um for tradicional.
for(let i = 0; i < livros.length; i++){
    console.log(livros[i])
}

//8. Mostre a quantidade total de livros.
console.log(livros.length);
*/