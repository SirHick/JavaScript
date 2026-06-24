/*let produto = {
    nome: "Detergente",
    preco: 17.90,
    qtd: 100
};

// 1. Exibir o objeto completo.
console.log(produto);

// 2. Exibir apenas o nome do produto.
console.log(produto.nome);

//3. Alterar o preço do produto.
produto.preco = 20.00;

//4. Adicionar uma nova propriedade chamada categoria.
produto.marca = "Ypê";

//5. Remover a propriedade quantidade.
delete produto.qtd;

//6. Exibir o objeto atualizado.
console.log(produto);

//=======================================================================*/

/*
let filmes = [
    {
        id: 1,
        titulo: "A volta dos que não foram",
        genero: "Drama",
        ano: 1999
    },

    {
        id: 2,
        titulo: "300",
        genero: "Ação",
        ano: 2000
    },

    {
        id: 3,
        titulo: "Oldboy",
        genero: "Suspense",
        ano: 2003
    }
]

//1. Exibir todos os filmes.
console.log(filmes);

//2. Exibir apenas o título do primeiro filme.
console.log(filmes[0].titulo);

//3. Exibir apenas o gênero do segundo filme.
console.log(filmes[1].genero);

//4. Utilizar um for para mostrar todos os filmes.
for(let i = 0; i < filmes.length; i++){
    console.log(filmes[i]);
}

//5. Utilizar outro for para mostrar apenas os títulos.
for(let i = 0; i < filmes.length; i++){
    console.log(filmes[i].titulo);
}
// ================================================================================*/

/*
let alunos = [
    {
        matricula: 123,
        nome: "Gustavo",
        nota: 9.5
    },

    {
        matricula: 124,
        nome: "Charles",
        nota: 10
    },

    {
        matricula: 125,
        nome: "Patrícia",
        nota: 10
    },

    {
        matricula: 126,
        nome: "Letícia",
        nota: 9.0
    }
]

// 1. Exibir todos os alunos.
console.log(alunos);

// 2. Adicionar um novo aluno utilizando push().
alunos.push(
    {
        matricula: 127,
        nome: "Pitty",
        nota: 10
    }
);

// 3. Exibir a lista atualizada.
console.log(alunos);

// 4. Remover o último aluno utilizando pop().
alunos.pop();

// 5. Exibir novamente a lista.
console.log(alunos);

// 6. Utilizar um for para mostrar apenas os nomes dos alunos.
for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i].nome);
}

// ==================================================================================== */

let funcionario = [
    {
        id: 1,
        nome: "Henrique",
        cargo: "Gerente"
    },

    {
        id: 2,
        nome: "André",
        cargo: "Chefe"
    },

    {
        id: 3,
        nome: "Peterson",
        cargo: "Segurança"
    },

    {
        id: 4,
        nome: "Tobias",
        cargo: "Zelador"
    }
];

/*
// 1. Exiba todos os funcionários
console.log(funcionario);

// 2. Utilizar um for para procurar o funcionário com id = 3.
for(let i = 0; i < funcionario.length; i++){
    if(funcionario[i].id === 3){
        console.log(funcionario[i]);
        console.log("Funcionário encontrado");
        console.log(funcionario[i]);
    }
}


//3. Quando encontrar, exibir a mensagem:

//
//Funcionárioencontrado:
//

// 4. Exibir os dados completos do funcionário encontrado.

*/

let livros = [
    {
        id: 1,
        titulo: "1984",
        autor: "George Orwell"
    },

    {
        id: 2,
        titulo: "Senhor dos Anéis",
        autor: "J.R.R. Tolkien"
    },

    {
        id: 3,
        titulo: "O Hobbit",
        autor: "J.R.R. Tolkien"
    }
]

// Depois crie um objeto chamado respostaAPI contendo:

//{
//status:true,
//mensagem:"Livros encontrados",
//dados:livros
//}

/*let respostaAPI = {
    status: true,
    mensagem: "Livros encontrados",
    dados: livros
}

// 1. Exibir o objeto respostaAPI.
console.log(respostaAPI);

// 2. Exibir apenas o conteúdo de dados.
console.log(respostaAPI.dados);

// 3. Exibir o título do primeiro livro.
console.log(respostaAPI.dados[0].titulo);
// 4. Utilizar um for para mostrar todos os títulos dos livros.
for(let i = 0; i < respostaAPI.dados.length; i++){
    console.log(respostaAPI.dados[i].titulo);
}

// 5. Adicionar um novo livro utilizando push().
respostaAPI.dados.push({
    id: 4,
    titulo: "O Grande Gatsby",
    autor: "F. Scott Fitzgerald"
});

// 6. Exibir novamente a resposta da API.
console.log(respostaAPI);
*/

//Crie um sistema de cadastro de jogos utilizando:

// - Objeto para representar um jogo.
let jogo = {
    id: 1,
    nome: "The Legend of Zelda: Breath of the Wild",
    categoria: "Ação/Aventura"
};

// - Array de objetos para armazenar vários jogos.
let jogos = [jogo];

// - push() para adicionar novos jogos.
jogos.push({
    id: 2,
    nome: "Super Mario Odyssey",
    categoria: "Plataforma"
});

// - for para listar todos os jogos.
for(let i = 0; i < jogos.length; i++){
    console.log(jogos[i]);
}

// - Busca de um jogo pelo id.
for(let i = 0; i < jogos.length; i++){
    if(jogos[i].id === 1){
        console.log("Jogo encontrado: " + jogos[i].nome);
    }

// - Exibição apenas do nome e da categoria dos jogos cadastrados.
    console.log("Nome: " + jogos[i].nome + ", Categoria: " + jogos[i].categoria);
}