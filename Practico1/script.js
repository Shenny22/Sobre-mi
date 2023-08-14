function calcular(){
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    let oper = document.getElementById("operaciones").value;
    let rdo;

    /* Operaciones que va a realizar la calculadora */
    if(oper == "+"){
        rdo= (num1 + num2);
    }
    else if(oper == "-"){
        rdo= (num1 - num2);
    }
    else if (oper == "/"){
        if (num2 === 0) {
            window.alert("ERROR!! No se puede dividir por cero, complete los campos correctamente");
            return undefined;
        }
        rdo= num1 / num2;
    }
    else{
        rdo= (num1 * num2);
    }

    /* valido que los campos sean solamente númericos */
    if (isNaN(num1) || isNaN(num2)) {
        alert("ERROR!! No deje campos vacios--Ingrese solamente números.");
        return;
    }  

    /* Limito la cantidad de digitos de los números:
    1) Si el número es muy grande */
    if (rdo >= 999999999 ){ 
       window.alert("El resultado es demasiado grande para los carácteres permitidos.");
       return NaN;
    }
    /* 2) Para el caso de un número muy pequeño lo divido en dos rangos,
     el primer rango es (-0.009,0) y el segundo rango es (0,0.009)*/
    if (-0.0009 < rdo && rdo < 0 ){ 
        window.alert("El resultado es demasiado pequeño.");
        return NaN;
    }
    if (0.0009 > rdo && rdo > 0 ){ 
        window.alert("El resultado es demasiado pequeño.");
        return NaN;
    }
              
    document.getElementById("resultado").innerHTML  = parseFloat(rdo);
}
/* Funcion para limpiar los campos de la calculadora*/
function borrar(){
    document.getElementById("numero1").value ="";
    document.getElementById("numero2").value ="";
    document.getElementById("operaciones").value ="";
    document.getElementById("resultado").innerHTML="RESULTADO";
}
