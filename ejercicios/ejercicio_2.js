const button = document.querySelector('.btn-Calcular');

function funcion_calcular(e)
{
    e.preventDefault();
    var Tcelcius = Number(document.querySelector('.TC').value);
    console.log(Tcelcius);
    var Tfahrenheit= Tcelcius*9/5+32;
    // alert ('la temperatura fahrenheit es: ' + Tfahrenheit);
    document.getElementById("respuesta").innerText ='la temperatura fahrenheit es: ' + Tfahrenheit + " °F";
}

button.addEventListener("click",funcion_calcular);

