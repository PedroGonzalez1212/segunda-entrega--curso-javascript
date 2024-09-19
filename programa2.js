// // Objetos
class Habitacion {
    constructor(numero, disponible) {
        this.numero = numero;
        this.disponible = disponible; // true si la habitación está disponible, false si está reservada
    }

    reservar() {
        if (this.disponible) {
            this.disponible = false;
        } else {
            alert("La habitación ya está reservada.");
        }
    }

    liberar() {
        if (!this.disponible) {
            this.disponible = true;
        } else {
            alert("La habitación ya estaba disponible.");
        }
    }
}

// Funciones
function obtenerHabitacion(mensajePrompt) {
    let numeroHabitacion = prompt(mensajePrompt);
    let habitacion = habitaciones.find( (el) => el.numero === numeroHabitacion);

    while(habitacion === undefined) {
        alert("Número de habitación inválido, vuelva a ingresar otro");
        numeroHabitacion = prompt(mensajePrompt);
        habitacion = habitaciones.find( (el) => el.numero === numeroHabitacion);
    }

    return habitacion;
}

function reservarHabitacion() {
    const habitacionAReservar = obtenerHabitacion("Ingrese el número de la habitación que desea reservar");

    if (habitacionAReservar.disponible) {
        habitacionAReservar.reservar();
        alert("La habitación ha sido reservada.");
    } else {
        alert("La habitación no está disponible para reservar.");
    }
}

function liberarHabitacion() {
    const habitacionALiberar = obtenerHabitacion("Ingrese el número de la habitación que desea liberar");

    if (!habitacionALiberar.disponible) {
        habitacionALiberar.liberar();
        alert("La habitación ha sido liberada.");
    } else {
        alert("La habitación ya estaba disponible.");
    }
}

function consultarDisponibilidadHabitacion() {
    const habitacion = obtenerHabitacion("Ingrese el número de la habitación para consultar su disponibilidad");

    if (habitacion.disponible) {
        alert("La habitación está disponible.");
    } else {
        alert("La habitación está reservada.");
    }
}

// Inicio del programa
const habitaciones = [
    new Habitacion("101", true),
    new Habitacion("102", false),
    new Habitacion("103", true),
    new Habitacion("104", true),
];

let mensajePrompt = "Ingrese el número de la operación que quiere realizar. 1- Reservar habitación, 2- Liberar habitación, 3- Consultar disponibilidad, 0- Salir";
let opcion = parseInt(prompt(mensajePrompt));

while(opcion !== 0) {

    switch(opcion) {
        case 1:
            reservarHabitacion();
            break;

        case 2:
            liberarHabitacion();
            break;

        case 3:
            consultarDisponibilidadHabitacion();
            break;
    }

    // Volvemos a pedir la opción al usuario
    opcion = parseInt(prompt(mensajePrompt));
}