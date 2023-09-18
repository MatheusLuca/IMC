
let btnImc = document.querySelector(".calcularIMC");



btnImc.addEventListener("click", calcular);

function calcular() {

    let pesoPessoa = document.querySelector(".peso");
    let alturaPessoa = document.querySelector(".altura");
    let pPessoa = Number(pesoPessoa.value);
    let aPessoa = Number(alturaPessoa.value);
    let imcFinal = pPessoa / (aPessoa * aPessoa);
    let imprimirResultado = document.querySelector(".resultado");

    if (imcFinal < 17) {
        imcFinalFormatado = arredondar(imcFinal);
        imprimirResultado.innerHTML = `PODE ENTERRAR ${imcFinalFormatado}`;

    }
    if (imcFinal > 17 && imcFinal <= 18.49) {
        imcFinalFormatado = arredondar(imcFinal);
        imprimirResultado.innerHTML = `FIOTE SO O CHASSI DO GRILHO ${imcFinalFormatado}`;

    }
    if (imcFinal > 18.5 && imcFinal <= 24.99) {
        imcFinalFormatado = arredondar(imcFinal);
        imprimirResultado.innerHTML = `Peso Normal ${imcFinalFormatado}`;
    }
    if (imcFinal > 25 && imcFinal <= 29.99) {
        imcFinalFormatado = arredondar(imcFinal);
        imprimirResultado.innerHTML = `Acima do peso ${imcFinalFormatado}`;

    }

    if (imcFinal > 30 && imcFinal <= 34.99) {
        imcFinalFormatado = arredondar(imcFinal);
        imprimirResultado.innerHTML = `Obesim da tropa ${imcFinalFormatado}`;
    }
    if (imcFinal > 35 && imcFinal <= 39.99) {
        imcFinalFormatado = arredondar(imcFinal);
        imprimirResultado.innerHTML = `mobdick ${imcFinalFormatado}`;
    }
    if (imcFinal > 40) {
        imcFinalFormatado = arredondar(imcFinal);
        imprimirResultado.innerHTML = `Caixao redondo ${imcFinalFormatado}`;
    }

}

function arredondar(imc) {
    let imcFormatado = imc.toFixed(2);
    return imcFormatado
}


let verificaClasse = document.querySelector('body');
let trocaTema = document.querySelector('.button-tema');

trocaTema.addEventListener('click', function () {

    if (verificaClasse.classList.contains("temaClaro")) {
        alteraTemaEscuro()
    }

    else {
        alteraTemaClaro();
    }
});

function alteraTemaEscuro() {
    let adicionarTema = document.querySelector('.temaClaro');
    adicionarTema.classList.remove('temaClaro');
    adicionarTema.classList.add('temaEscuro');
    let titulo = document.querySelector('.h1');
    titulo.style.color = 'white'
}

function alteraTemaClaro() {
    let adicionarTema = document.querySelector('.temaEscuro');
    adicionarTema.classList.remove('temaEscuro');
    adicionarTema.classList.add('temaClaro');
    let titulo = document.querySelector('.h1');
    titulo.style.color = 'black'
}







