const totalPedido = document.querySelector(".precio-total")
let total= 0

const pedidos = JSON.parse(localStorage.getItem("comprasPendientes"))

document.addEventListener("DOMContentLoaded", () => {
    const pedidos = JSON.parse(localStorage.getItem("comprasPendientes"))
    agregarPedido()
    totalaPagar()
})


//Precio total - LocalStorage
function totalaPagar(){
    pedidos.forEach(pago => {
        const pagoTotal = pago.precio * pago.amount
        total += pagoTotal
    })
    totalPedido.innerHTML = total
}

/*Agregar el pedido al container de compra*/
function agregarPedido(){
    const containerPedidos = document.querySelector(".productos")

    const producto = document.createElement("div")
    producto.classList.add("descripcion-plato-shop")


    pedidos.forEach(user => {
        const {img, nombre, gramaje, precio, id, amount} = user

        const pedidoFormato = document.createElement("div")
        pedidoFormato.classList.add("descripcion-plato-shop")
        pedidoFormato.innerHTML = `
            <div class="foto-comida-shop">
                <img src="${img}" alt="">
            </div>
            <div class="descripcion-comida-shop">
                <h4>${nombre}</h4>
                <p id="gramaje">${gramaje}</p>
                <h6>Monto: ${amount}</h6>
                <p id="precio"><span>Precio:</span> $${precio}</p>
            </div>
        `;
        containerPedidos.appendChild(pedidoFormato)
    })
}



/*Json*/
const nombre = document.querySelector(".descripcion-comida-shop h4")
const monto = document.querySelector("h6")
const precio = document.querySelector("#precio")
const form = document.querySelector(`form`);
const direccion = document.querySelector("#direccion")
const numero = document.querySelector("#numero")
const metodoPago = document.querySelector("#metodosdepago")
const tipoPedido = document.querySelector("#tipodepedido")
const url = "http://localhost:3000";


async function getUsers() { //Llamado de los datos del API, seccion Users
    const response = await fetch(`${url}/pedidos`);
    const data = response.json();
    return data;
  }

async function crearPedido(pedido) {   //Crear y añadir usuarios a la API
    const response = await fetch(`${url}/pedidos`, {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pedido),
    });
}



async function createOrUpdateUserDOM() { 

    for (i = 0; i < pedidos.length; i++){
        localStorage.setItem('nombrePlato', pedidos[i].nombre);
        localStorage.setItem('amount', pedidos[i].amount);
        localStorage.setItem('precioPlato', pedidos[i].precio);

        const nombrePlato = localStorage.getItem('nombrePlato');
        const montoPedido = localStorage.getItem('amount');
        const precioPlato = localStorage.getItem('precioPlato');

        const pedidoSolicitado = {  //crear un objeto, donde cada elemento tendrá como valor el valor del input ingresado por el usuario (.value)
            plato: nombrePlato,
            monto: montoPedido,
            price: precioPlato,
            metodoDePago: metodoPago.value,
            tipoPedido: tipoPedido.value,
            direccion: direccion.value,
            numero: numero.value
      
          };
          await crearPedido(pedidoSolicitado);
    }
    
}

  
form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    
    createOrUpdateUserDOM();
});


/*MODAL*/
const btnAbrirPopup = document.querySelector('#btnAbrir');
const overLay = document.querySelector('#ventana');
const popup = document.querySelector('#emergente');
const btnCerrarpopup = document.querySelector('#btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', abrirVentana)

function abrirVentana(){
  overLay.classList.add('active')
  popup.classList.add('active')
}
 btnCerrarpopup.addEventListener('click', function(){
  overLay.classList.remove('active') 
  popup.classList.remove('active')
}) 

