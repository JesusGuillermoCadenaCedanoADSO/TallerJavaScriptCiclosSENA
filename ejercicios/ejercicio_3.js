function funcion_calcular()
        {
        var nota_1 = document.calculo.Nota_taller_1.value;
        var nota_2 = document.calculo.Nota_taller_2.value;
        var quiz = document.calculo.quiz.value;
        var parcial = document.calculo.parcial.value;
        var promedio= (nota_1 + nota_2 + quiz)/3;
        var nota_final= promedio*30/100+parcial*70/100;
        alert ('la nota final es: ' + nota_final);
        }