let tarjetasdestapadas = 0
let tarjeta1 = null
let tarjeta2 = null
let primerresultado = null
let segundoresultado = null
let mov = 0
let mostrarmov = document.getElementById("movimientos");
let aciertos = 0;
let mostraraciertos = document.getElementById("aciertos");
let temporizador = false;
let timer = 30;
let mostrartiempo = document.getElementById('t-restante')
let time = null;

let respuestas = ['azul', 'blue', 'rojo', 'red',
 'amarillo', 'yellow', 'café', 'brown', 'turquesa',
  'turquoise', 'verde', 'green', 'blanco', 'white', 'morado', 'purple']

respuestas = respuestas.sort(()=>{return Math.random()-0.5})
console.log(respuestas)

function bloqueartarjetas(){
for(let i = 0; i<=15; i++){
    tarjetabloq = document.getElementById(i);
    tarjetabloq.innerHTML = respuestas[i];
    tarjetabloq.disabled = true;
}
}

function contarTiempo(){
    time = setInterval(()=>{
        timer --;
        mostrartiempo.innerHTML = `Tiempo : ${timer} segundos`
        if(timer == 0){
            clearInterval(time);
            bloqueartarjetas();
            mostrartiempo.innerHTML = `Game oveeeeeeeer. You ran out of time :(`
        }
    },1000)
}

function destapar(id){
    if(temporizador == false){
        contarTiempo();
        temporizador = true;
    }
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
        mostrarmov.innerHTML = `Movements: ${mov}`;

        if(primerresultado == 'azul' && segundoresultado == 'blue'){
            tarjetasdestapadas = 0;
            aciertos++;
            mostraraciertos.innerHTML = `Bull's eye: ${aciertos}`;
            
        }else if( primerresultado == 'blue' && segundoresultado == 'azul'){
            tarjetasdestapadas = 0;
            aciertos++;
            mostraraciertos.innerHTML = `Bull's eye: ${aciertos}`;
        }
        else if(primerresultado == 'rojo' && segundoresultado == 'red'){
            tarjetasdestapadas = 0;
            aciertos++;
            mostraraciertos.innerHTML = `Bull's eye: ${aciertos}`;

        }else if(primerresultado == 'red' && segundoresultado == 'rojo'){
            tarjetasdestapadas = 0;
            aciertos++;
            mostraraciertos.innerHTML = `Bull's eye: ${aciertos}`; 
        }
        else if(primerresultado == 'amarillo' && segundoresultado == 'yellow'){
            tarjetasdestapadas = 0;
            aciertos++;
            mostraraciertos.innerHTML = `Bull's eye: ${aciertos}`;
        }else if(primerresultado == 'yellow' && segundoresultado == 'amarillo'){
            tarjetasdestapadas = 0;
            aciertos++;
            mostraraciertos.innerHTML = `Bull's eye: ${aciertos}`;
        }
        else if(primerresultado == 'café'  && segundoresultado == 'brown' ){
            tarjetasdestapadas = 0;
            aciertos++;
            mostraraciertos.innerHTML = `Bull's eye: ${aciertos}`;
        }else if(primerresultado == 'brown' && segundoresultado == 'café'){
            tarjetasdestapadas = 0;
            aciertos++;
            mostraraciertos.innerHTML = `Bull's eye: ${aciertos}`;
        }else if(primerresultado == 'green' &&  segundoresultado == 'verde'){
            tarjetasdestapadas = 0;
            aciertos++;
            mostraraciertos.innerHTML = `Bull's eye: ${aciertos}`;
        }
        else if(primerresultado == 'verde' && segundoresultado == 'green' ){
            tarjetasdestapadas = 0;
            aciertos++;
            mostraraciertos.innerHTML = `Aciertos: ${aciertos}`;
        }else if(primerresultado == 'blanco'  && segundoresultado == 'white'){
            tarjetasdestapadas = 0;
            aciertos++;
            mostraraciertos.innerHTML = `Bull's eye: ${aciertos}`;
        }else if(primerresultado == 'white' && segundoresultado == 'blanco'){
            tarjetasdestapadas = 0;
            aciertos++;
            mostraraciertos.innerHTML = `Bull's eye: ${aciertos}`; 
        }
        else if(primerresultado == 'morado' && segundoresultado == 'purple'){
            tarjetasdestapadas = 0;
            aciertos++;
            mostraraciertos.innerHTML = `Bull's eye: ${aciertos}`;
        }else if( primerresultado == 'purple' && segundoresultado == 'morado'){
            tarjetasdestapadas = 0;
            aciertos++;
            mostraraciertos.innerHTML = `Bull's eye: ${aciertos}`;
        }
        else if(primerresultado == 'turquesa'  && segundoresultado == 'turquoise' ){
            tarjetasdestapadas = 0;
            aciertos++;
            mostraraciertos.innerHTML = `Bull's eye: ${aciertos}`;
        }else if( primerresultado == 'turquoise' && segundoresultado == 'turquesa'){
            tarjetasdestapadas = 0;
            aciertos++;
            mostraraciertos.innerHTML = `Bull's eye: ${aciertos}`;
        }
        else{
            console.log(primerresultado)
            console.log(segundoresultado)
            setTimeout(() => {
                tarjeta1.innerHTML=" ";
                tarjeta2.innerHTML = " ";
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasdestapadas = 0;
            }, 800);
        }
        if(aciertos == 8){
            clearInterval(time);
            mostraraciertos.innerHTML = `Bull's eye: ${aciertos} ʕ•́ᴥ•̀ʔっ♥`;
            mostrarmov.innerHTML = `Movements: ${mov} (◑_◑)`;
            mostrartiempo.innerHTML = `Good job! You only took ${30 - timer } seconds to complete it`
        }

    }
}