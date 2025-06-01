/* passos para desenvolver o projeto
    1. Parar o enviou do formulario ao pressionar o botão
        use o comando preventDefault()

*/

const form = document.querySelector('#formulario'); // seleciona o formulario.

// Função principal do formulario
form.addEventListener('submit', function(e){
    e.preventDefault(); // Para o envento de envio do formulario ao clicar no botão.

    const inputPeso = e.target.querySelector('#peso'); // armazenando o input peso.
    const inputAltura = e.target.querySelector('#altura'); // armazenando o input altura.

    const peso = Number(inputPeso.value); // armazenando o valor do input peso.
    const altura = Number(inputAltura.value); // armazenando o valor do input altura.

    // Verifica se o valor no campo peso é um numero valido.   
    if(!peso){
        setResultado('Peso Inválido');
        return;
    }

    // Verifica se o valor no campo altura é um numero valido.
    if(!altura){
        setResultado('Altura Inválida');
        return;
    }

    
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    
    const msg = `Seu IMC é: ${imc} (${nivelImc})`;
    setResultado(msg, true);
});

function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

// função que imprimi um resultado na tela.
function setResultado (msg, isValid){
    const resultado = document.querySelector('#resultado'); // seleciona a div resultado.
    resultado.innerHTML = ''; // limpa a div resultado.
    
    const p = criaP(); //armazena o p html para inserir no texto.

    //resultado.appendChild(p); // escreve mensagem na tela.
    if(isValid){
        p.classList.add('paragrafo-resultado');
    }else {
        p.classList.add('bad');
    }

    
    p.innerHTML = msg; //muda o valor da variavel resultado.
    resultado.appendChild(p); // escreve mensagem na tela.

}

// função para criar elemento P html para estilizar mensagem.
function criaP(/*className*/){
    const p = document.createElement('p'); // cria um elemento html p.
    //p.classList.add(className); // adiciona uma classe na tag html p.
    //p.innerHTML = 'Texto que vai estar dentro da tag p no html.'; // atribui a mensagem na variavel.
    return p;
}