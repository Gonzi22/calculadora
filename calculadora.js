let operacion = prompt("¿que operacion desea? 1-Sumar 2-Restar 3-Multiplicar 4-Dividir. ")
let operando1 
let operando2 
let resultado


if (operacion >= 1 && operacion <= 4) {
operando1 = parseInt(prompt("Introduce el primer numero: "))
operando2 = parseInt(prompt("Introduce el segundo numero: "))
 }


    
 
function suma(numero1, numero2) {
    return numero1 + numero2
}
function resta(numero1, numero2) {
    return numero1 - numero2
    
}
function multiplicacion(numero1, numero2) {
    return numero1 * numero2
    
}
function division(numero1, numero2) {
    return numero1 / numero2
    
}
switch (operacion){
    case "1":
        resultado = suma(operando1, operando2)
        document.write("El valor de la suma es: " + resultado)
        break;
    case "2":
            resultado = resta(operando1, operando2)
            document.write("El valor de la resta es: " + resultado)
        break;

    case "3":
        resultado = multiplicacion(operando1, operando2)
        document.write("El valor de la multiplicacion es: " + resultado)
         break;

     case "4":
        resultado = division(operando1, operando2)
        document.write("El valor de la division es: " + resultado)
         break;

    default:
        alert("La opcion especificada no es correcta.")
        break;
    }
    alert (resultado)