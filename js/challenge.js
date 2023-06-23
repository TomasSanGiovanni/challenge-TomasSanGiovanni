const nombre = document.getElementById('Nombre');
const apellido = document.getElementById('Apellido');
const dni = document.getElementById('Dni');
const email = document.getElementById('email');
const form = document.getElementById('form');
const listaEntradas = document.querySelectorAll(".formEntrada");
let capacidad = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (capacidad <= 2) {
        let condicion = validacionDatos();
        if (condicion == true) {
            enviarFormu();
        }
    } else if (capacidad > 2) {
        MensajeError("formEmail", "Cupo lleno");
    }
    capacidad++;

})
/* Validos que todos los datos ingresados sean correctos */
function validacionDatos() {
    form.lastElementChild.innerHTML = ""
    let condicion = true;
    const dniIngresados = [];
    let regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
    listaEntradas.forEach((element) => {
        element.lastElementChild.innerHTML = "";
    });


    if (nombre.value.length < 1 || nombre.value.trim() == "") {
        MensajeError("formNombre", "Ingrese el Nombre");
        condicion = false;
    } else if (validarLetras(nombre.value) == false) {
        nombre.value = "";
        MensajeError("formNombre", "Ingrese un nombre valido")
        condicion = false;
    }


    if (apellido.value.length < 1 || apellido.value.trim() == "") {
        MensajeError("formApellido", "Ingrese el Apellido");
        condicion = false;
    } else if (validarLetras(apellido.value) == false) {
        apellido.value = "";
        MensajeError("formApellido", "Ingrese un apellido valido")
        condicion = false;
    }

    if (dni.value.length != 8) {
        MensajeError("formDni", "Ingrese el DNI");
        condicion = false;
    }/*else if(dniIngresados.includes(dni.value)){
        MensajeError("formDni","El DNI ingresado ya esta registrado");
        condicion = false;
    }
    dniIngresados.push(dni.value)
*/
    if (!regexEmail.test(email.value) || email.value.length < 1) {
        MensajeError("formEmail", "Ingrese su email");
        condicion = false;
    }

    return condicion;
}

/*Funcion para mostrar el mensaje de error*/
function MensajeError(Claseinput, mensaje) {
    let elemento = document.querySelector(`.${Claseinput}`);
    elemento.lastElementChild.innerHTML = mensaje
}
/*Reseteo el formulario cuando todos los datos sean correctos y enviados*/
function enviarFormu() {
    form.reset();
    form.lastElementChild.innerHTML = "Enviado Correctamente";

}
/* Valido que en nombre y apellido solo se permitan letras */
function validarLetras(Texto) {
    var permitidos = /^([a-zA-ZñÑáéíóúÁÉÍÓÚ\s])+$/;
    if (Texto.search(permitidos)) {
        return false;
    } else {
        return true;
    }

}
