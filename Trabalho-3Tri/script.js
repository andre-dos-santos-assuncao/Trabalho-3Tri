var altura = document.getElementById("altura");
var peso = document.getElementById("peso");

function calcularImc() {
    var valor_altura = altura.value/100;
    var valor_peso = peso.value;
    var valor_IMC = (valor_peso / (valor_altura * valor_altura)).toFixed(2);

    if (valor_altura <= 0 || valor_peso <= 0){
        window.alert("Insira valores validos.")
    } else {
        window.alert("Seu IMC é: " + valor_IMC);
    }

}



































