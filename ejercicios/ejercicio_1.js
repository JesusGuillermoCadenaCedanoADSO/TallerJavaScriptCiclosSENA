addEventListener("DOMContentLoaded", (e)=>{
    let myfrom = document.querySelector("#CalcularTiempoMedio");
    myfrom.addEventListener("submit", (e)=>{
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        let horas_a_minutos = Number(data.horas)*60;
        let segundos_a_minutos = Number(data.segundos)/60;
        let minutos_totales = horas_a_minutos + segundos_a_minutos;
        let tiempo_medio = Math.round(minutos_totales/Number(data.distancia)*100)/100;
        document.querySelector("pre").innerHTML = "El tiempo medio es :" + "<br>" +
        tiempo_medio + " minutos por kilometro";
    })
})