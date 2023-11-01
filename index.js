function Exercicio1() {
    var numero = prompt("Digite um número:");
    numero = parseInt(numero);

    if (!isNaN(numero)) {
        var somaDivisores = 0;
        var divisores = [];

        for (var i = 1; i < numero; i++) {
            if (numero % i === 0) {
                somaDivisores += i;
                divisores.push(i);
            }
        }

        var resultado = "Números divisíveis por " + numero + ": " + divisores.join(', ');
        alert(resultado + "\nA soma dos divisores é: " + somaDivisores);
    } else {
        alert("Por favor, insira um número válido.");
    }
}


function Exercicio2() {

    var x1 = parseFloat(prompt("Digite o valor de x1:"));
    var y1 = parseFloat(prompt("Digite o valor de y1:"));
    var x2 = parseFloat(prompt("Digite o valor de x2:"));
    var y2 = parseFloat(prompt("Digite o valor de y2:"));

    if (!isNaN(x1) && !isNaN(y1) && !isNaN(x2) && !isNaN(y2)) {
        var distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        alert("A distância euclidiana é: " + distancia);

    } else {
        alert("Por favor, insira valores numéricos válidos.");
    }
}


function Exercicio3(){

var frase = prompt("Digite uma frase:");
var palavras = frase.toLowerCase().match(/\b\p{L}+\b/gu);
var contagem = {};

if (palavras !== null) {
    palavras.forEach(function(palavra) {
        if (contagem[palavra]) {
            contagem[palavra]++;
        } else {
            contagem[palavra] = 1;
        }
    });

    var resultado = "";

    for (var palavra in contagem) {
        resultado += palavra + " (" + contagem[palavra] + ")\n"; }

    alert(resultado);
} else {
    alert("Não foram encontradas palavras na frase digitada.");
}
}


function Exercicio4() {
    var entrada = prompt("Digite a string representando a matriz:");


    var linhas = entrada.split(';');
    var qtdLinhas = linhas.length;
    var qtdColunas = linhas[0].split(' ').length;
    
    alert("Valores inseridos:"+ entrada + "\nEssa é uma matriz de dimensão " + qtdLinhas + " x " + qtdColunas + ".");
}

function Exercicio5() {
    var n = parseInt(prompt("Digite um número para a sequência de Fibonacci:"));

    if (!isNaN(n)) {
        var a = 0, b = 1;
        var resultado = "Sequência de Fibonacci até " + n + ":\n";

        while (a <= n) {
            resultado += a;
            if (a < n) {
                resultado += ", ";
            } else {
                resultado += ".";
            }

            var temp = a + b;
            a = b;
            b = temp;
        }

        alert(resultado);
    } else {
        alert("Por favor, insira um número válido.");
    }
}
