const nombre = document.getElementById('Nombre');
const apellido = document.getElementById('Apellido');
const dni = document.getElementById('Dni');
const email = document.getElementById('email');
const form = document.getElementById('form');
const listaEntradas = document.querySelectorAll(".formEntrada");

form.addEventListener("submit", (e) => {
e.preventDefault();
let condicion = validacionDatos();
if (condicion == true){
    enviarFormu();
}

})
/* Validos que todos lo datos ingresados sean correncto */
function validacionDatos (){
    form.lastElementChild.innerHTML = ""
    let condicion = true;
    const datosIngresados = []; 
    let regexEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/ ;
        listaEntradas.forEach((element) => {
        element.lastElementChild.innerHTML = "";
        });

        
        if(nombre.value.length <1 || nombre.value.trim() == ""){
         MensajeError("formNombre","Ingrese el Nombre");
         condicion = false;
        } else if(validarLetras(nombre.value) == false){
            nombre.value = "";
            MensajeError("formNombre","Ingrese un nombre valido")
            condicion= false;
        }
        
        
        if(apellido.value.length <1 || apellido.value.trim() == ""){    
         MensajeError("formApellido","Ingrese el Apellido");
         condicion = false;
        } else if(validarLetras(apellido.value) == false){
            apellido.value = "";
            MensajeError("formApellido","Ingrese un apellido valido")
            condicion= false;
        }
       
        
        if (dni.value.length !=8){
            MensajeError("formDni","Ingrese el DNI");
            condicion = false;
        }else if (datosIngresados.includes(dni.value)) {
            MensajeError("formDni", "El DNI ya fue registrado previamente");
            condicion = false;
          }  else if (datosIngresados.length >= 2) {
            MensajeError("formDni", "Se ha alcanzado el límite máximo de usuarios registrados");
            condicion = false;
          } else {
            datosIngresados.push(dni.value);
          }
        if (!regexEmail.test(email.value) || email.value.length < 1 ){
            MensajeError("formEmail","Ingrese su email");
            condicion = false;
        }

         return condicion;
}

/*Funcion para mostrar el mensaje de error*/
function MensajeError(Claseinput, mensaje){
    let elemento = document.querySelector(`.${Claseinput}`);
    elemento.lastElementChild.innerHTML = mensaje
}
/*Reseteo el formulario cuando todos los datos sean correctos y enviados*/
function enviarFormu(){
form.reset();
form.lastElementChild.innerHTML = "Enviado Correctamente";

}
/* Valido que en nombre y apellido solo se permitan letras */
function validarLetras(Texto){
var permitidos = /^([a-zA-ZñÑáéíóúÁÉÍÓÚ\s])+$/;
if(Texto.search(permitidos)){
    return false;
}else {
    return true;
}

}