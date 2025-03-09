const telaInput = document.querySelector('.tela')
const desativar = document.querySelectorAll('li')


function ligar() {
    telaInput.value =""
    telaInput.placeholder ="0"
    telaInput.style.color="#000"
}
function desligar() {
    telaInput.placeholder =""
    telaInput.value = ""  
    telaInput.style.color="rgb(219, 212, 212)"
}

function adicionar(valor) {
    document.querySelector(".tela").value += valor;
}

function calcular() {
    let display = document.querySelector(".tela");
    let expressao = display.value;

    try {
        // Substituir "√" por Math.sqrt()
        expressao = expressao.replace(/√(\d+)/g, "Math.sqrt($1)");

        // Substituir "%" para cálculo de porcentagem
        expressao = expressao.replace(/(\d+)%/g, "($1/100)*");

        display.value = eval(expressao);
        
    } catch (e) {
        display.value = "Erro!";
    }
    
}

let numerosNegativos = []

function salvaMenos() {
    let lista = document.querySelector('.tela')
    let valor = parseInt(lista.value * (-1))
    numerosNegativos.push(valor)
    console.log(numerosNegativos)
    console.log(numerosNegativos.length)
    ligar()
}
let numerosPositivos = []
function salvaMais() {
    let lista = document.querySelector('.tela')
    let valor = parseInt(lista.value)
    numerosPositivos.push(valor)
    console.log(numerosPositivos)
    console.log(numerosPositivos.length)
    ligar()
}
let somaArrays = document.getElementById('btnMRC')
function calcularMRC() {

let maxLength = Math.max(numerosNegativos.length, numerosPositivos.length);

let somaArrays = Array.from({ length: maxLength }, (_, i) => 
    (numerosNegativos[i] || 0) + (numerosPositivos[i] || 0)
);

let somaTotal = somaArrays.reduce((acumulador, valor) => acumulador + valor, 0);

telaInput.value = somaTotal
console.log(somaTotal)

numerosNegativos = []
numerosPositivos = []
}
