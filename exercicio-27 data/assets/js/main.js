

function escopo(){
    const textoH1 = document.querySelector('#data'); // seleciona o H1
    const mensagem = recebeData(); // armazena a mensagem
    
    textoH1.innerHTML = ''; // limpa o campo h1
    textoH1.innerHTML = mensagem; // imprime a mensagem no campo h1    

    const paragrafos = document.querySelector('.container'); // seleciona o conteiner
    const ps = paragrafos.querySelectorAll('p'); // seleciona todos os paragrafos

    const estiloBody = getComputedStyle(document.body); // armazena informações do body
    const backgroundColorBody =  estiloBody.backgroundColor; //armazena a cor do body

    // aplica a cor do body no fundo do paragrafo e muda a cor do texto para branco
    for (let p of ps){
        p.style.backgroundColor = backgroundColorBody; // muda a cor do fundo das tag P.
        p.style.color = '#ffffff'; // muda a cor do texto para branco.
    }
}

function zeroEsquerda(num){
   return num >= 10 ? num : `0${num}`;
}

function diaSemanaTexto(numero){
    let semanaTexto = numero;

    switch(semanaTexto){
        case 0:
            semanaTexto = 'Domingo';
            return semanaTexto;
        case 1:
            semanaTexto = 'Segunda';
            return semanaTexto;
        case 2:
            semanaTexto = 'Terça';
            return semanaTexto;
        case 3:
            semanaTexto = 'Quarta';
            return semanaTexto;
        case 4:
            semanaTexto = 'Quinta';
            return semanaTexto;
        case 5:
            
            return semanaTexto = 'Sexta';
        case 6:
            semanaTexto = 'Sábado';
            return semanaTexto;
        default:
            semanaTexto = 'Erro';
    }
}

function mesTexto(numero){
    let mesTexto = numero;

    switch(mesTexto){
        case 0:
        return mesTexto = 'Janeiro';
        case 1:
        return mesTexto = 'Feveiro';
        case 2:
        return mesTexto = 'Março';
        case 3: 
        return mesTexto = 'Abril';
        case 4:
        return mesTexto = 'Maio';
        case 5:
        return mesTexto = 'Junho';
        case 6:
        return mesTexto = 'Julho';
        case 7:
        return mesTexto = 'Agosto';
        case 8:
        return mesTexto = 'Setembro';
        case 9:
        return mesTexto = 'Outubro';
        case 10:
        return mesTexto = 'Novembro';
        case 11:
        return mesTexto = 'Dezembro';
        default:
            mesTexto = 'Erro';
    }
}


function recebeData(){
    const data = new Date();

    

    //Data numerico
    const diaNumero = zeroEsquerda(data.getDate());
    const anoNumero = zeroEsquerda(data.getFullYear());
    const horaNumero = zeroEsquerda(data.getHours());
    const minutosNumero = zeroEsquerda(data.getMinutes());
    const segundosNumero = zeroEsquerda(data.getSeconds());    

    //Data Texto
    const mesText = mesTexto(data.getMonth());
    const diaSemanaText = diaSemanaTexto(data.getDay());

    

    const dataAtual = (`Hoje é ${diaSemanaText}, Dia ${diaNumero} de ${mesText} de ${anoNumero}, às ${horaNumero} Horas e ${minutosNumero} Minutos e ${segundosNumero} Segudos.`);
    return dataAtual;
    
    //Hoje é Domingo, Dia 27 de Março de 2021, às 19 Horas e 25 Minutos e 30 Segudos.
}

    


escopo();