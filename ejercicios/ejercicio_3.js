const button = document.querySelector('.btn-Calcular');

function funcion_calcular()
        {
        var nota_1 = Number(document.querySelector('.N1').value);
        var nota_2 = Number(document.querySelector('.N2').value);
        var quiz = Number(document.querySelector('.QUIZZ').value);
        var parcial = Number(document.querySelector('.PARCIAL').value);
        var promedio= (nota_1 + nota_2 + quiz)/3;
        var nota_final= promedio*30/100+parcial*70/100;
        alert ('la nota final es: ' + nota_final);
        }

button.addEventListener("click",funcion_calcular);

const revealBtn=document.querySelector('.reveal-btn');

const hiddenContent = document.querySelector('.hidden-content');

function revealContent(){
    if(hiddenContent.classList.contains('reveal-btn')){
        hiddenContent.classList.remove('reveal-btn')
    } else {
        hiddenContent.classList.add('reveal-btn')
    }
}

revealBtn.addEventListener('click',revealContent);