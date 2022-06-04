let tarjetasdestapadas = 0
let tarjeta1 = null
let tarjeta2 = null
let primerresultado = null
let segundoresultado = null
let mov = 0
let mostrarmov = document.getElementById("movimientos");
let aciertos = 0;
let mostraraciertos = document.getElementById("aciertos");

let respuestas = ['azul', 'blue', 'rojo', 'red',
 'amarillo', 'yellow', 'café', 'brown', 'turquesa',
  'tuquoise', 'verde', 'green', 'blanco', 'white', 'morado', 'purple']

respuestas = respuestas.sort(()=>{return Math.random()-0.5})
console.log(respuestas)

function destapar(id){
    tarjetasdestapadas++;
    console.log(tarjetasdestapadas);

    if(tarjetasdestapadas == 1){
        tarjeta1 = document.getElementById(id);
        primerresultado = respuestas[id];
        tarjeta1.innerHTML = primerresultado;

        tarjeta1.disabled = true;
    }else if(tarjetasdestapadas == 2){
        tarjeta2 = document.getElementById(id);
        segundoresultado = respuestas[id];
        tarjeta2.innerHTML = segundoresultado;
        tarjeta2.disabled = true;
        mov ++;
        mostrarmov.innerHTML = `Movimientos: ${mov}`;

        if(primerresultado == segundoresultado){
            tarjetasdestapadas = 0;
            aciertos++;
            mostraraciertos.innerHTML = `Aciertos: ${aciertos}`;
        }
    }
}