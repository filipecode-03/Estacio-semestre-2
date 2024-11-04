var variavel; 
variavel = 3 + 3;
alert(variavel);

var resultadoMultiplicacao = multiplique(10, 50);

var divLocal = document.getElementById('exibe_resultado');
divLocal.innerHTML += resultadoMultiplicacao;

function multiplique(numero1, numero2){
var resultado = 0;
resultado = numero1 * numero2;
return resultado;
}