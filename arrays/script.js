let usuarios = [10, "Carlos", "Maria"]

console.log(usuarios);

//Acessando os itens
console.log(usuarios[2]);

//Adicionando itens no final
usuarios.push("Dedé");

console.log(usuarios);

//Removendo o último item

usuarios.pop();
console.log(usuarios);

//Adicionando itens no início
usuarios.unshift("Gabriel");
console.log(usuarios);

//Mostrando o tamanho do array
console.log(usuarios.length);

//Verifica se um item existe no array
console.log(usuarios.includes("Carlos"));

console.log(usuarios.includes("João"));


//Mostra a posição do item no array
console.log(usuarios.indexOf("Maria"));

//Remove ou adiciona itens
//splice()

usuarios.splice(0, 1); //Remove o primeiro item (início, fim)

console.log(usuarios);

//Copia parte do array
usuarios2 = [20, "Carlos", "Maria", "Pedro", "João"]

let novoArray = usuarios2.slice(0, 3); //Começa no 0 e vai até a posição 3, sem incluir o item da posição 3
console.log(novoArray);

//Inverter a ordem do array
usuarios2.reverse();
console.log(usuarios2);

//Ordenar o array por ordem alfabética
usuarios2.sort();
console.log(usuarios2);

//forEach
//Percorre o array
usuarios2.forEach(function (usuario) {
  console.log(usuario);
});

/* usuarios -> arrays
    for each -> percorrer todos elementos
    function(usuarios) -> funcao executada para cada elemento
    usuario -> variavel temporaria que recebe cada valor do array
*/

//for of
//outra forma de percorrer
//o for...of percorre valores do array e ignora os indices e pega apenas os valores

for (let usuario of usuarios) {
  console.log(usuario);
}

//for in
//mais utilizado
//percorre os indices, podendo acessar o valor e o indice
for (let indice in usuarios2) {
  console.log(indice);
  console.log(usuarios2[indice]);
}

//for tradiconal
//mais utilizado
//o length de informa a quantidade de elemnetos que existem no array
for (let i = 0; i < usuarios.length; i++) {
  console.log(i);
  console.log(usuarios[i]);
}

//join
//transforma array em texto
//o metodo join(" - ") percorre todos os elementos e coloca " - " entre eles
let nomes = usuarios2.join(" - ");
console.log(nomes);

//concat
//junta arrays
let admin = ["admin1", "Admin2"];
let sistema = usuarios.concat(admin);
console.log(sistema);   