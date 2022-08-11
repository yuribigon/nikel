const nome = "Yuri Bigon";
let nome2 = "";
let pessoaDefault = {
    nome: "Marcelo Eltz",
    idade: "33",
    trabalho: "Programador"
}

let nomes = ["Marcelo Eltz", "Maria Silva", "Pedro Silva"];

let pessoasListaVazia = [];

let pessoas = [
    {
        nome: "Marcelo Eltz",
        idade: "33",
        trabalho: "Programador"
    },
    {
        nome: "Yuri",
        idade: "31",
        trabalho: "WebDev"
    }
];



function alterarNome() {
    nome2 = "Maria Silva";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEAlteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoas(pessoa){
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa){
    pessoas.push(pessoa);
}

function imprimirPessoas(){

    console.log("-----------IMPRIMIR PESSOAS----------");
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho);
        
    })
}

imprimirPessoas();

adicionarPessoa({
        nome: "Giovanna",
        idade: "30",
        trabalho: "Mídia"
    });

imprimirPessoas();



//imprimirPessoa(pessoaDefault);

// imprimirPessoa({
//     nome: "Yuri",
//     idade: "31",
//     trabalho: "WebDev"
// });




//recebeEAlteraNome("João Silva Pereira");
//recebeEAlteraNome("Maria Silva");



// alterarNome();

