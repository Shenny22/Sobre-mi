/* Ordeno variables y constantes que utilizo a lo largo del código */
let nombre;
let jugadaUsuario;
const piedra = "PIEDRA";
const papel = "PAPEL";
const tijera = "TIJERA";
let puntosComputadora = 0;
let puntosUsuario = 0;
let ronda = 0;

/* Defino boton para que el usuario comience a jugar*/
let botonjugar = document.getElementById("ok");
botonjugar.addEventListener("click", nombreJugador);

/* Defino función para ingresar el nombre del jugador*/
function nombreJugador(){
    nombre = document.getElementById("nombre").value;
    nombre = nombre.toUpperCase();
    if (nombre === "" || nombre === ".") {
        alert("¡Para poder jugar ingrese su nombre!");
    }
    else {
        document.getElementById("leyenda1").innerHTML = "SELECCIONE UNA OPCION: PIEDRA - PAPEL O TIJERA";
        return nombre;
    }
}

/* Defino funciones de las jugadas que puede elegir el usuario*/
function eleccionPiedra(){
        jugadaUsuario = piedra;
        jugarRonda();
        return jugadaUsuario;
}
function eleccionPapel(){
        jugadaUsuario = papel;
        jugarRonda();
        return jugadaUsuario;
}
function eleccionTijera() {
        jugadaUsuario = tijera;
        jugarRonda();
        return jugadaUsuario;
}

/* Defino las jugadas aleatorias que generará la computadora */ 
function compuJugada() {
    let opciones = [piedra,papel,tijera];
    let jugadaRandom = Math.floor(Math.random() * 3);
    let jugadaComputadora = opciones[jugadaRandom];
    return jugadaComputadora;
}

/* Defino el ganador de las rondas */
function determinarGanador(jugadaComputadora, jugadaUsuario) {
    rondas();
    let resultado;
    if (jugadaComputadora === jugadaUsuario) {
        resultado = "☆ EMPATE! NO HAY PUNTOS ☆";
    } else if ( jugadaUsuario === piedra && jugadaComputadora === tijera ) {
        resultado = "GANASTE! PUNTO PARA VOS ☆";
    } else if ( jugadaUsuario === papel && jugadaComputadora === piedra ) {
        resultado = "GANASTE! PUNTO PARA VOS ☆";
    } else if (jugadaUsuario === tijera && jugadaComputadora === papel  ) {
        resultado = "GANASTE! PUNTO PARA VOS ☆";
    } else if (jugadaComputadora === piedra && jugadaUsuario === tijera) {
        resultado =  "PERDISTE! PUNTO PARA LA COMPUTADORA ☆";
    } else if (jugadaComputadora === papel && jugadaUsuario === piedra) {
        resultado =  "PERDISTE! PUNTO PARA LA COMPUTADORA ☆";
    } else if (jugadaComputadora === tijera && jugadaUsuario === papel) {
        resultado = "PERDISTE! PUNTO PARA LA COMPUTADORA ☆";
    }
    return resultado;
}

function jugarRonda() {
    let jugadaComputadora = compuJugada();
    let resultado = determinarGanador(jugadaComputadora, jugadaUsuario);
    document.getElementById("leyenda2").innerHTML = nombre + ": " + jugadaUsuario;
    document.getElementById("leyenda3").innerHTML = "COMPUTADORA : " + jugadaComputadora;
    ronda += 1;
    if (resultado === "PERDISTE! PUNTO PARA LA COMPUTADORA ☆") {
        puntosComputadora += 1;
    } else if (resultado === "GANASTE! PUNTO PARA VOS ☆") {
        puntosUsuario += 1;
    }
    document.getElementById("leyenda1").innerHTML = resultado;
    document.getElementById("usuario").innerHTML = nombre + " : " + puntosUsuario + " PUNTOS";
    document.getElementById("computadora").innerHTML = "COMPUTADORA : " + puntosComputadora + " PUNTOS";
}

/* Se declara como ganador quien logre conseguir 3 victorias*/
function rondas() {
    let leyenda = document.getElementById("leyenda1");
    let opciones = document.querySelector("opciones");
    let rondasTotales = 0;
    let rondasMaximas = 5; 
    while (rondasTotales < rondasMaximas) {
        if (puntosUsuario === 3) {
            leyenda.innerHTML = `☆EN ${ronda} RONDAS-JUEGO FINALIZADO☆ SOS GANADOR/A DEL JUEGO!`;
            opciones.classList.add("disabled"); 
            break;
        }
        else if (puntosComputadora === 3) {
            leyenda.innerHTML = `☆EN ${ronda} RONDAS-JUEGO FINALIZADO☆ GANÓ LA COMPUTADORA!`;
            opciones.classList.add("disabled"); 
            break;
        }
        rondasTotales++;
    
    reiniciar.classList.remove("disabled");
    reiniciar.addEventListener("click", reiniciarJuego);
  }

}

/* Defino función para reiniciar el juego */
function reiniciarJuego() {
  location.reload();
}