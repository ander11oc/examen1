


const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const multiplicacion = document.getElementById("multiplicacion");
const division = document.getElementById("division");

suma.onclick = function() {
    
    let numero1 = parseInt(document.getElementById('n1').value);
    let numero2 = parseInt(document.getElementById('n2').value);
    let resultado = "El resultado de su suma es: " + (numero1 + numero2);
    document.getElementById("resultado").innerHTML = resultado;
}
resta.onclick = function() {
    let numero1 = parseInt(document.getElementById('n1').value);
    let numero2 = parseInt(document.getElementById('n2').value);
    let resultado = "El resultado de su resta es: " + (numero1 - numero2);
    document.getElementById("resultado").innerHTML = resultado;
}
multiplicacion.onclick = function() {
    let numero1 = parseInt(document.getElementById('n1').value);
    let numero2 = parseInt(document.getElementById('n2').value);
    let resultado = "El resultado de su multiplicacion es: " + (numero1 * numero2);
    document.getElementById("resultado").innerHTML = resultado;
}
division.onclick = function() {
    let numero1 = parseInt(document.getElementById('n1').value);
    let numero2 = parseInt(document.getElementById('n2').value);
    let resultado = "El resultado de su division es: " + (numero1 / numero2);
    document.getElementById("resultado").innerHTML = resultado;
}


///////////////////////////////////////////////////////////////////

var miCanvas;
function inicializar(){
    miCanvas = document.getElementById('canvas');
    miCanvas.addEventListener('mousemove',posicionRaton,false);
}
function posicionRaton(){
   
    let color1 = Math.floor(Math.random()*250)
    let color2 = Math.floor(Math.random()*250)
    let color3 = Math.floor(Math.random()*250)
    let resultadoColor = color1+","+color2+","+color3
    document.getElementById("canvas").style.background = "RGB("+resultadoColor+")";
}


///////////////////////////////////////////////////////////////////

const resultadoNotas = document.getElementById("promedioNotas");

resultadoNotas.onclick = function() {
    let nombre = document.getElementById('nombre').value;
    let nota1 = parseInt(document.getElementById('nota1').value);
    let nota2 = parseInt(document.getElementById('nota2').value);
    let nota3 = parseInt(document.getElementById('nota3').value);
    let nota4 = parseInt(document.getElementById('nota4').value);

    let calculo = (nota1 + nota2 + nota3 + nota4) / 4
    
    if (calculo >= 0 && calculo <3 ){
        reproApro = "Reprobo"
        let mensaje = nombre + " El promedio de sus notas es: " + calculo + " y " + reproApro ;
        document.getElementById("resultadoNotas").innerHTML = mensaje;
    }
    else if (calculo >= 3 && calculo <=5 ){
        reproApro = "Aprobo"
        let mensaje = nombre + " El promedio de sus notas es: " + calculo + " y " + reproApro ;
        document.getElementById("resultadoNotas").innerHTML = mensaje;
    }
    else{
        reproApro = nombre + " Recuerde que las notas son de 1 a 5"
       
        document.getElementById("resultadoNotas").innerHTML = reproApro;
    }
}
