const telaInput = document.querySelector('.tela')
const desativar = document.querySelectorAll('li')
    
function ligar() {
    telaInput.disabled = false;
    telaInput.value =""
    telaInput.placeholder ="0"
    telaInput.style.color="#000"
}
function desligar() {
    telaInput.placeholder =""
    telaInput.value =""  
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
let btnMenos = document.getElementById('btnM-')
let btnMais = document.getElementById('btnM+')
function salvaMenos() {
    btnMenos = telaInput.value * (-1)
    console.log(btnMenos)
    ligar()
}
function salvaMais() {
    btnMais = telaInput.value 
    console.log(btnMais)
    ligar()
}
let soma = document.getElementById('btnMRC')
function calcularMRC() {
    soma = eval(btnMais + btnMenos) 
    telaInput.value = soma
    console.log(btnMais)
}
