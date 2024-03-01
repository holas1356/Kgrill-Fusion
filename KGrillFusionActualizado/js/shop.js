const containerProducts = document.querySelectorAll(".descripcion-container")
console.log(containerProducts)

let compras = []; //Se va a ir acumulando las compras en el boton del nav
const containerBuyCart = document.querySelector(".contenedor-inputs")

const precioTotal = document.querySelector(".precio-total")
let total = 0


//DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
    //compras = JSON.parse(localStorage.getItem("comprasPendientes") || [] )
    let compras;
    const comprasJSON = localStorage.getItem("comprasPendientes");
    if (comprasJSON) {
        compras = JSON.parse(comprasJSON);
    } else {
        compras = [];
    }

    containerProducts.forEach((boton) =>{
        boton.addEventListener("click", addProducto)
    })

    containerBuyCart.addEventListener("click", deleteProducto) //delete

    totalaPagar()
    loadHtml()
});


function addProducto(e){ //Añadir
    e.preventDefault()
    if(e.target.classList.contains("btn-buy")){
        const selectProduct = e.target.parentElement.parentElement //Recupera el padre de la etiqueta (es decir, el div)
        readTheContent(selectProduct)
    }
}

function readTheContent(producto){//Sacar los atributos de todos los productos
    const infoProducto = { //Crear un objeto con los atributos y su info
        img: producto.querySelector(".foto-comida img").src,
        nombre: producto.querySelector("h4").textContent,
        gramaje: producto.querySelector("#gramaje").textContent,
        precio: producto.querySelector("#precio").textContent,
        id: producto.querySelector("a").getAttribute("id"),
        amount: 1
    }

    //Actualizar el total de compras
    total = parseFloat(total) + parseFloat(infoProducto.precio)

    //Aumentar cantidad productos
    const exist = compras.some(producto => producto.id === infoProducto.id) //Verifica si ya existe un producto con el mismo ID en la lista de compras
    
    if(exist){ //Si existe el producto... (True)
        const pro = compras.map(productoAct => {
            if(productoAct.id == infoProducto.id){ //Si el producto es igual...
                productoAct.amount++ //Aumenta el monto
                return productoAct
            } else{
                return productoAct
            }
        })
        compras = [...pro] //Se agrega 1+
    } else{
        compras = [...compras, infoProducto] //Si el producto no existe, agrega el nuevo producto a la lista de compras.
    }
    localStorage.setItem("comprasPendientes", JSON.stringify(compras)) //Actualiza el almacenamiento local con la lista de compras actualizada después de agregar el nuevo producto.
    loadHtml()
}


//Calcular la suma total de los precios según lo almacenado en el LOCALSTORAGE
function totalaPagar(){ 
    compras.forEach(pago => {
        const totalCompra = pago.precio * pago.amount
        total += totalCompra
    })
    precioTotal.innerHTML = total
}


//Restar el valor total al momento de eliminar un producto de la lista de compras
function deleteProducto(e){ //Borrar 
    e.preventDefault()
    if(e.target.classList.contains("delete-product")){
        const deleteId = e.target.getAttribute("id")

        compras.forEach(value => {  //Itera la lista DB
            if(value.id == deleteId){ //Compara el ID del producto en la iteración con el ID obtenido del elemento
                const priceReduce = parseFloat(value.precio) * parseFloat(value.amount)
                total = total - priceReduce
            }
        })
        compras = compras.filter(producto => producto.id !== deleteId) //Nos va a filtrar aquellos elementos que NO cumplan esta condicion
                                                                       //y filtra la lista de compras para eliminar el producto que coincide con el ID
        

        // Actualizamos el localStorage despues de eliminar
        localStorage.setItem('comprasPendientes', JSON.stringify(compras));

        // Eliminamos el elemento del localStorage
        localStorage.removeItem(deleteId);
    }


    //Si no hay productos en la lista de compras después de eliminar el producto, establece el precio total a cero en el HTML.
    if (compras.length === 0) {
        precioTotal.innerHTML = 0;
    }
    loadHtml()
}





function loadHtml(){ //Inyectar las compras al boton de Cart-compras
    clearHtml()

    compras.forEach(product => {
        const {img, nombre, gramaje, precio, id, amount} = product

        const row = document.createElement("div")
        row.classList.add("descripcion-plato-shop")
        row.innerHTML = `
        <div class="foto-comida-shop">
            <img src="${img}" alt="">
        </div>
    
        <div class="descripcion-comida-shop">
            <h4>${nombre}</h4>
            <p id="gramaje">${gramaje}</p>
            <p id="precio"><span>Precio: $</span>${precio}</p>
            <h6>Monto: <span id="monto">${amount}</span></h6>
        </div>
        <span class="delete-product" id="${id}">X</span>
        `
        containerBuyCart.appendChild(row)
        localStorage.setItem("comprasPendientes", JSON.stringify(compras))

        precioTotal.innerHTML = total //Cambiamos el valor del TOTAL de compra
    });
}


function clearHtml(){
    containerBuyCart.innerHTML = ""
}


//MODAL

const btnAbrirPopup = document.querySelector('#btnAbrir');
const overLay = document.querySelector('#ventana');
const popup = document.querySelector('#emergente');
const btnCerrarpopup = document.querySelector('#btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', abrirVentana)
function abrirVentana(e){
    e.preventDefault()
  overLay.classList.add('active')
  popup.classList.add('active')
}
 btnCerrarpopup.addEventListener('click', function(e){
    e.preventDefault()
  overLay.classList.remove('active') 
  popup.classList.remove('active')
}) 

