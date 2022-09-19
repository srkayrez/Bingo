let numeros = [
    01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15,
    16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
    46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75
];
let numerosJaSorteados = [];
let numeroSorteado;
let numeroDeJogadores;
let jogadores = [];


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
    if(numeroSorteado <= 15){
    document.getElementById("numeroSorteado").innerHTML = `${'B '}${numeroSorteado}`;
    }
    else if(numeroSorteado > 15 && numeroSorteado <= 30){
    document.getElementById("numeroSorteado").innerHTML = `${'I '}${numeroSorteado}`;
    }
    else if(numeroSorteado > 30 && numeroSorteado <= 45){
    document.getElementById("numeroSorteado").innerHTML = `${'N '}${numeroSorteado}`;
    }
    else if(numeroSorteado > 45 && numeroSorteado <= 60){
    document.getElementById("numeroSorteado").innerHTML = `${'G '}${numeroSorteado}`;
    }
    else {
    document.getElementById("numeroSorteado").innerHTML = `${'O '} ${numeroSorteado}`;
    }
}

function selecionarNaTabela(){
    document.getElementById(numeroSorteado).style.backgroundColor = 'rgb(96, 96, 185)';
    document.getElementById(numeroSorteado).style.color = 'white';
}

function buttonNovoJogo(){
    document.getElementById('numeroDeJogadores').style.opacity = '1';
    document.getElementById('buttonIniciar').style.opacity = '1';
    document.getElementById('labelNome').style.opacity = '1';
    document.getElementById('abrirModal').innerHTML = ' <a href="#fechar" title="Fechar" class="fechar"> <button onClick="buttonNovoJogo()" class="buttonModal">x</button></a><h2>Novo jogo</h2><label id="labelNome">Digite o numero de jogadores</label><input type="number" id="numeroDeJogadores" placeholder="Numero de jogadores"><button id="buttonIniciar" onClick="getNumeroDeJogadores()"> Iniciar </button><br>'

}


function getNumeroDeJogadores(){
    numeroDeJogadores = document.getElementById('numeroDeJogadores').value;
    console.log(numeroDeJogadores);
    document.getElementById('numeroDeJogadores').style.opacity = '0';
    document.getElementById('buttonIniciar').style.opacity = '0';
    document.getElementById('labelNome').style.opacity = '0';
    pushInputs();
}

function pushInputs(){
    for (let i = 0; i < numeroDeJogadores; i++)
    {
        document.getElementById('abrirModal').innerHTML += '<label>' + (i+1) +'º jogador</label> <br> <input id="jogador'+ (i+1) + '"placeholder="Nome do ' + (i+1) + ' jogador"><br>'
    }
    document.getElementById('abrirModal').innerHTML += '<br><button onClick="getNomeDosJogadores()"> salvar </button>'
    gerarTabelaJogadores();
}

function getNomeDosJogadores(){
    for (let i = 0; i < numeroDeJogadores; i++)
    {
        jogadores.push(document.getElementById('jogador'+(i+1)).value);
    }
    alert(jogadores);
}

function gerarTabelaJogadores(){
    document.getElementById('tabelaJogadores').innerHTML = '<table>'+
    '<tr id="bingo">'+
        '<th> B </th>'+
        '<th> I </th>'+
        '<th> N </th>'+
        '<th> G </th>'+
        '<th> O </th>'+
    '</tr>'+
    '<tr>'+
        '<td id="0">  </td>'+
        '<td id="5">  </td>'+
        '<td id="10">  </td>'+
        '<td id="15">  </td>'+
        '<td id="20">  </td>'+
    '</tr>'+
    '<tr>'+
        '<td id="1">  </td>'+
        '<td id="6">  </td>'+
        '<td id="11">  </td>'+
        '<td id="16">  </td>'+
        '<td id="21">  </td>'+
    '</tr>'+
    '<tr>'+
        '<td id="2">  </td>'+
        '<td id="7">  </td>'+
        '<td>  </td>'+ // esse tem q ser espaço mesmo
        '<td id="12">  </td>'+
        '<td id="22">  </td>'+
    '</tr>'+
   ' <tr>'+
        '<td id="3">  </td>'+
        '<td id="8">  </td>'+
        '<td id="16">  </td>'+
        '<td id="18">  </td>'+
        '<td id="23">  </td>'+
    '</tr>'+
    '<tr>'+
        '<td id="4">  </td>'+
        '<td id="9">  </td>'+
        '<td id="14">  </td>'+
        '<td id="29">  </td>'+
        '<td id="24">  </td>'+
    '</tr>'+
'</table>'

}

