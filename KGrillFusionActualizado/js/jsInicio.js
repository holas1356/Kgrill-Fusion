/* importamos la base de datos para ingresar las nuevas reservas */
import { newReserva } from "../js/formulario.js";
import { newRegistro } from "../js/formulario.js";
import {newCurso} from "../js/formulario.js";


/* selectores reserva */
const btnAbrirPopup = document.querySelector('#btnAbrir');
const overLay = document.querySelector('#ventana');
const popup = document.querySelector('#emergente');
const btnCerrarpopup = document.querySelector('#btn-cerrar-popup');

/* evento para abrir ventana emergente */
btnAbrirPopup.addEventListener('click', abrirVentana)
/* funsion para abrir ventana */
function abrirVentana() {
  overLay.classList.add('active')
  popup.classList.add('active')
}
/* funsion para cerrar ventana */
btnCerrarpopup.addEventListener('click', function () {
  overLay.classList.remove('active')
  popup.classList.remove('active')
})

/* selector formulario */
const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', validarFormulario)
/* crear el evento */
function validarFormulario(e) {
  e.preventDefault();
  const nombre = document.querySelector('#nombre').value
  const email = document.querySelector('#email').value
  const cantidadPersonas = document.querySelector('#cantidadPersonas').value
  const tipoMesa = document.querySelector('#tipo').value
  const dia = document.querySelector('#dia').value
  const hora = document.querySelector('#hora').value

  const reserva = {
    nombre,
    email,
    cantidadPersonas,
    tipoMesa,
    dia,
    hora
  }

  
  if (validate(reserva)) {
    Swal.fire({
      icon: 'warning',
      title: 'Todos los campos son obligatorios',
    })
  } else {
    // Oculta el modal original
    overLay.classList.remove('active')
    popup.classList.remove('active')

    
    Swal.fire({
      icon: 'success',
      title: 'Reserva exitosa',
      text: `Ya podrás disfrutar de todo nuestro menú, te esperamos muy pronto. Toda la información de tu reserva estará en el correo registrado!!`,
      // Ajusta el z-index de la alerta para que quede sobre todo
      customClass: {
        popup: 'mi-clase-zindex'
      },
      willClose: () => {
        
      }
    });
      newReserva(reserva)
      document.querySelector('#nombre').value = ""
      document.querySelector('#email').value = ""
      document.querySelector('#cantidadPersonas').value = ""
      document.querySelector('#tipo').value = ""
      document.querySelector('#dia').value = ""
      document.querySelector('#hora').value = ""

   
  }
  
  function validate(objeto) {
    return !Object.values(objeto).every(elem => elem !== '');
  }
}
/* selector del blog */
const btmbog = document.querySelector('#btm-blog')
/* evento para confirmacion del correo */
btmbog.addEventListener('click', enviarCorreo)

function enviarCorreo() {
  Swal.fire({
    icon: 'success',
    title: 'suscripción exitosa',
    text: 'te llegara un correo de confirmación, siempre estaras al tanto de nuestro blog! ya eres parte de kgrill fusion',
  },)
}

const formRegister = document.querySelector('#formRegister')
formRegister.addEventListener('submit', validarRegistro)
const input = document.querySelector('input')

function validarRegistro(e){
 
  e.preventDefault()
  const nombreRegister = document.querySelector('#nombreRegister').value
  const emailRegister = document.querySelector('#emailRegister').value
  const usuarioRegister = document.querySelector('#usuarioRegister').value
  const contraseñaRegister = document.querySelector('#contraseñaRegister').value

  const registro = {
    nombreRegister,
    emailRegister,
    usuarioRegister,
    contraseñaRegister
  }
  console.log(registro);
  newRegistro(registro)
  inicioSesion()
  
  document.querySelector('#nombreRegister').value = "";
  document.querySelector('#emailRegister').value= "";
  document.querySelector('#usuarioRegister').value= "";
  document.querySelector('#contraseñaRegister').value= "";
}



const formularioLogin = document.querySelector('#formulario_login')

formularioLogin.addEventListener('submit', validarLogin)

async function validarLogin (e){
  e.preventDefault()
  const correoLogin = document.querySelector('#correoLogin').value
  const passwordLogin = document.querySelector('#passwordLogin').value
  const url = "http://localhost:4000/registro"
   const response = await fetch(url)
   const responses = await response.json()

   console.log(responses);

    
   responses.forEach(dato => {
    if (correoLogin === dato.emailRegister && passwordLogin === dato.contraseñaRegister){
      Swal.fire({
        type: 'success',
        title: 'Iniciaste sesion',
      })
    }
  })

}

/* validar reserva de los cursos */

const formularioCurso = document.querySelector('#formularioCurso')

/* crear el evento */
formularioCurso.addEventListener('click', validarFormularioCurso)
/* funsion para ingresar los datos a la base de datos */
function validarFormularioCurso(e) {
  e.preventDefault();
  const nombreCurso = document.getElementById('#input1').value
  const emailCurso = document.getElementById('#input2').value
  const contactoCurso = document.getElementById('#input3').value
  

  const Cursos = {
    nombreCurso,
    emailCurso,
    contactoCurso
  }

  /* llamado a validacion */
  if (validate(Cursos)) {
    Swal.fire({
      icon: 'warning',
      title: 'todos los campos son obligatorios',
    })
  }
    newCurso(Cursos)
   
      

   
  }
  /* declaracion de funcion de validacion de campoc llenos */
  function validate(objeto) {
    return !Object.values(objeto).every(elem => elem !== '');
  }



    
  



