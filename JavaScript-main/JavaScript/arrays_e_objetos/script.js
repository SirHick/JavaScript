//Arrays de objetos no JavaScript

//Objetos
//Criando um objeto chamado 'Usuário'

let usuario = {

    //propriedade: valor
    nome: "Fulano",
    idade: 20, 
    cidade: "Joinville"
};

console.log(usuario);

//Acessando uma propriedade
console.log(usuario.nome);
console.log(usuario.idade);
console.log(usuario.cidade);

//Adicionando uma nova propriedade
usuario.email = "fulano@email.com";

//Removendo uma propriedade
delete usuario.cidade;
console.log(usuario);

//Array de objetos

let usuarios = [

    {
        id: 1,
        nome: "Henrique",
        idade: 21
    },

    {
        id: 2,
        nome: "Carlos",
        idade: 20
    },

    {
        id: 3,
        nome: "Diego",
        idade: 19
    }

];

console.log(usuarios);

//Mostrando um todos os usuários
console.log(usuarios);

console.log(usuarios[0]);

//Acessando dados específicos
console.log(usuarios[1].idade)

//Percorrendo arrays com 'for'
for(let i = 0; i < usuarios.length; i++){
    console.log(usuarios[i]);
}

//push()  | Adiciona itens no final do array
usuarios.push(
    {
        id: 4,
        nome: "Rafael",
        idade: 18

    }
)

console.log(usuarios);

//pop() | remove o último item
usuarios.pop()
console.log(usuarios);

//procurando usuario com id = 2

for(let i = 0; i < usuarios.length; i++){
    if(usuarios[i].id === 2){
        console.log("Achou o usuário")
        console.log(usuarios[i])
    }
}