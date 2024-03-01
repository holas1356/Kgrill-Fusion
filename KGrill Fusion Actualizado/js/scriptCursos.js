const user = document.querySelector("#user")
user.addEventListener("click", abrirLogin)
const main = document.querySelector(".contenedor_todo")
const btnLoginCerrar = document.querySelector('#btnLoginCerrar');

/* funsion para abrir login-register */
function abrirLogin(e) {
    e.preventDefault()
    main.style.display = "block"
}
/* funsion cerrar login - register */
btnLoginCerrar.addEventListener('click', function () {
    
    main.style.display = "none"
})

/* document.addEventListener("DOMContentLoaded", () =>{
    const validate = localStorage.getItem("inicio")
    console.log(validate)
    if(validate == "si"){
        main.style.display = "block"
    }
}) */
/* eventos para transicion entre login y register */
document.getElementById("btn_register").addEventListener('click', register)
document.getElementById("btn_iniciar_sesion").addEventListener('click', inicioSesion)
window.addEventListener('resize', anchoPagina)

/* declaracion */
const contenedorLoginRegister = document.querySelector(".contenedor_login_register")
const formularioLogin = document.querySelector(".formulario_login")
const formularioRegister = document.querySelector(".formulario_register")
const cajaTraseraLogin = document.querySelector(".caja_trasera_login")
const cajajTraseraRegistro = document.querySelector(".caja_trasera_register")

/* funsion para responsive */
function anchoPagina() {
    if (window.innerWidth > 850) {
        cajaTraseraLogin.style.display = "block"
        cajajTraseraRegistro.style.display = "block"
    } else {
        cajajTraseraRegistro.style.display = "block"
        cajajTraseraRegistro.style.opacity = "1"
        cajaTraseraLogin.style.display = "none"
        formularioLogin.style.display = "block"
        formularioRegister.style.display = "none"
        contenedorLoginRegister.style.left = "0px"
    }
}

anchoPagina()
/* funsion para diseño login*/
function inicioSesion() {
    if (window.innerWidth > 850) {
        formularioRegister.style.display = "none";
        contenedorLoginRegister.style.left = "10px";
        formularioLogin.style.display = "block";
        cajajTraseraRegistro.style.opacity = "1";
        cajaTraseraLogin.style.opacity = "0";
    } else {
        formularioRegister.style.display = "none";
        contenedorLoginRegister.style.left = "0px";
        formularioLogin.style.display = "block";
        cajajTraseraRegistro.style.display = "block";
        cajaTraseraLogin.style.display = "none";
    }

}


/* funsion para diseño register*/
function register() {
    if (window.innerWidth > 850) {
        formularioRegister.style.display = "block";
        contenedorLoginRegister.style.left = "410px";
        formularioLogin.style.display = "none";
        cajajTraseraRegistro.style.opacity = "0";
        cajaTraseraLogin.style.opacity = "1";
    } else {
        formularioRegister.style.display = "block";
        contenedorLoginRegister.style.left = "0px";
        formularioLogin.style.display = "none";
        cajajTraseraRegistro.style.display = "none";
        cajaTraseraLogin.style.display = "block";
        cajaTraseraLogin.style.opacity = "1";
    }
}

/* /* selectores para validar datos */
const nombreRegister = document.querySelector("#nombreRegister")
const emailRegister = document.querySelector("#emailRegister")
const usuarioRegister = document.querySelector("#usuarioRegister")
const contraseñaRegister = document.querySelector("#contraseñaRegister")
const formRegister = document.querySelector("#formRegister")
const parrafo = document.querySelector("#parrafo") 
/* evento y funsion para validar */
formRegister.addEventListener('submit', e => {
    e.preventDefault()
    let warning = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (nombreRegister.value.length < 6) {
        warning += "El nombre debe tener como minimo 6 caracteres <br>"
        entrar = true
    }
    if (!regexEmail.test(emailRegister.value)) {
        warning += "El email no es valido <br>"
        entrar = true
    }
    if (usuarioRegister.value.length < 8) {
        warning += "El usuario debe tener como minimo 8 caracteres <br>"
        entrar = true
    }
    if (contraseñaRegister.value.length < 8) {
        warning += "La contraseña debe tener como minimo 8 caracteres <br>"
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warning
    }else{
        parrafo.innerHTML = "Enviado"
    }

})