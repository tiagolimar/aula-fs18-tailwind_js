// Passo 1: Obter o valor do input
// Passo 2: Verificar se o valor é positivo ou negativo
// Passo 3: Escrever o resultado na tela

function verificarNumero(event) {
    event.preventDefault();

    let meuInput = document.getElementById("valor");
    let meuDisplay = document.getElementById("display");
    let meuValor = meuInput.value;

    meuValor = parseFloat(meuValor);
    // meuValor = parseInt(meuValor);
    // meuValor = Number(meuValor);
    // meuValor = +meuValor;

    // if (meuValor > 0){
    //     meuDisplay.innerText = 'O valor é positivo.'
    // }else if (meuValor == 0){
    //     meuDisplay.innerText = 'O valor é zero.'
    // }else{
    //     meuDisplay.innerText = 'O valor é negativo.'
    // }

    if (meuValor >= 18 && meuValor <= 70){
        meuDisplay.innerText = 'Você é obrigado a votar.'
    }else{
        meuDisplay.innerText = 'Você não é obrigado a votar.'
    }
}

// verificarNumero();


let meuValor = Number(prompt('Digite um número: '));

if (meuValor > 0){
    alert('O valor é positivo.')
}else if (meuValor == 0){
    alert('O valor é zero.')
}else{
    alert('O valor é negativo.')
}