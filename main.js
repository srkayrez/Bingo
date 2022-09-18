let numeros = [
    01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15,
    16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
    46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75
];
let numerosJaSorteados = [];
let numeroSorteado;

function sortearNovoNumero(){
    numeroSorteado = numeros[Math.floor(Math.random() * numeros.length)]
    numerosJaSorteados.push(numeroSorteado);
    numeros = numeros.filter(element => (element != numeroSorteado));
    ordenarElementos();
    alterarElementosHtml();
    selecionarNaTabela();
}

function ordenarElementos(){
    numerosJaSorteados.sort(function(a,b){
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    })
}

function alterarElementosHtml(){
    document.getElementById("numeroSorteado").innerHTML = numeroSorteado;
}

function selecionarNaTabela(){
    document.getElementById(numeroSorteado).style.backgroundColor = 'rgb(96, 96, 185)';
    document.getElementById(numeroSorteado).style.color = 'white';
}