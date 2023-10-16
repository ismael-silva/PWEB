document.write("Atividade 12 Retangulo <br><br>");

//Calculo da Area
function Retangulo(x, y){
    this.x = x;
    this.y = y;

    this.calcArea = function(){
        return x * y;
    }
}

var x = prompt("Insira a base do retângulo");
var y = prompt("Insira a altura do retângulo");

var objRet = new Retangulo(x, y);

document.write("A área do Retângulo é de: " + objRet.calcArea() + "<br><br><br>");