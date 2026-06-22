//FUNÇÃO TRADICIONAL

function soma(a, b){
    return a + b;
}

//console.log(soma(2, 4));
let resultado = soma(2, 4);
console.log(resultado);

//FUNÇÃO SEM RETURN
function saudacao(){
    console.log("Olá, bem vindo ao sistema.");
}

saudacao();

//ARROW FUNCTION
const multiplicar = (a, b) => {
    return a * b;
}

console.log(multiplicar(5, 6));

//ARROW FUNCTION - FORMA CURTA

const dobrar = numero => numero * 2;

console.log(dobrar(10));

//Exemplo Prático - Verificar Idade

const verificarIdade = idade => {
    if(idade >= 18){
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

console.log(verificarIdade(20));
console.log(verificarIdade(15));
