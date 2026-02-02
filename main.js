'use strict'   //Identificar erros presentes no código, é mais rigoroso

const botaoTrocarCor = document.getElementById('trocar-cor')
function trocarCor(){
    let cor = document.getElementById('cor').value
    if(cor == "azul"){
        cor = "blue"
    }else if(cor == "vermelho"){
        cor = "red"
    }else if(cor == "amarelo"){
        cor = "yellow"
    }else if(cor == "verde"){
        cor = "green"
    }
    document.documentElement.style.setProperty('--cor--bg', cor)
}     
botaoTrocarCor.addEventListener('click', trocarCor)