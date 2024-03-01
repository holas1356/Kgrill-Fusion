/*Selectores*/
const entrada = document.querySelector(".entrada");   
const fuerte = document.querySelector(".fuerte");
const bebidas = document.querySelector(".bebida");
const fusion = document.querySelector(".fusion"); 
const postres = document.querySelector(".postre");



document.addEventListener("DOMContentLoaded", () => {
    cargarEntradas()
    cargarFuertes()
    cargarPostres()
    cargarBebidas()
    cargarFusion()

    descripcionEntrada();
    descripcionFuerte();
    descripcionPostre();
    descripcionBebida();
    descripcionFusion()

    alertAdd()
});


var swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	spaceBetween: 10,
	// init: false,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	breakpoints: {
	  620: {
		slidesPerView: 1,
		spaceBetween: 20,
	  },
	  680: {
		slidesPerView: 2,
		spaceBetween: 40,
	  },
	  920: {
		slidesPerView: 3,
		spaceBetween: 40,
	  },
	  1240: {
		slidesPerView: 4,
		spaceBetween: 50,
	  },
	} 
});


function cargarEntradas(){
  const container = document.querySelector(".entradas")
  menu.forEach(elemento =>{
    const {foto, nombre, id} = elemento

    if(elemento.categoria === "entradas"){
      const entrada = document.createElement("div")
      entrada.classList.add("swiper-slide")
      entrada.innerHTML = `
                        <img src="${foto}">
                          <div class="info">
                              <h4>${nombre}</h4>
                              <img src="img/arrow.png" class="arrow" id="${id}">
                          </div>
      `
      container.appendChild(entrada)
    }
  })
}   

function descripcionEntrada() {
    const botonPedido = document.querySelectorAll(".arrow");
    
    menu.forEach(elemento => {
      const {nombre, foto, descripcion, gramaje, precio, id, kcal, carbohidrados, grasas, proteina} = elemento

      if(elemento.categoria === "entradas"){
          botonPedido.forEach(boton =>{
          boton.addEventListener('click', (e) => {
            
          const idPlato = e.target.getAttribute("id")

          if (idPlato == id){
            const descripcionPedido = document.createElement("p");
            
            descripcionPedido.innerHTML = `
            <div class="descripcion-plato entrada">
              <div class="foto-comida">
                <img src="${foto}" alt="">

                <table>
                    <h3>Información nutricional:</h3>
                    <tr>
                      <td>${kcal}Kcal</td>
                      <td>${carbohidrados}g</td>
                      <td>${grasas}g</td>
                    <td>${proteina}g</td>
                    </tr>
                    <tr>
                      <th>Calorias</th>
                      <th>Carbohidratos</th>
                      <th>Grasas</th>
                      <th>Proteina</th>
                    </tr>
                </table>
              </div>
          
              <div class="descripcion-comida">
                <h4>${nombre}</h4>
                <p id="gramaje">${gramaje}</p>
                <p id="descripcion">${descripcion}</p>
                <p>$<span id="precio">${precio}</span></p>
                <a href="#" id="${id}" class="btn-buy">Añadir al carrito</a>
                <h5 class="addBuyMessage"></h5>
              </div>
            </div>
            `;
            cleanHtml()
          entrada.appendChild(descripcionPedido);
        }
      });
    })
  }
})
}



  function cargarFuertes(){
    const container = document.querySelector(".fuertes")
    
    menu.forEach(elemento =>{
      const {foto, nombre, id} = elemento

      if(elemento.categoria === "platos fuertes"){
        const plato = document.createElement("div")
        plato.classList.add("swiper-slide")
        plato.style.width =""
        plato.innerHTML = `
                          <img src="${foto}">
                            <div class="info">
                                <h4>${nombre}</h4>
                                <img src="img/arrow.png" class="arrow" id="${id}">
                            </div>
        `
        container.appendChild(plato)
      }
    })
  }


function descripcionFuerte() {

  const botonPedido = document.querySelectorAll(".arrow");
  
  menu.forEach(elemento => {
    const {nombre, foto, descripcion, gramaje, precio, id, kcal, carbohidrados, grasas, proteina} = elemento
  
    if(elemento.categoria === "platos fuertes"){
        botonPedido.forEach(boton =>{
        boton.addEventListener('click', (e) => {

          const idPlato = e.target.getAttribute("id")

          if (idPlato == id){
            const descripcionPedido = document.createElement("p");
  
            descripcionPedido.innerHTML = `
            <div class="descripcion-plato platos-fuertes">
              <div class="foto-comida">
                  <img src="${foto}" alt="">

                  <table>
                    <h3>Información nutricional:</h3>
                      <tr>
                        <td>${kcal}Kcal</td>
                        <td>${carbohidrados}g</td>
                        <td>${grasas}g</td>
                        <td>${proteina}g</td>
                      </tr>
                      <tr>
                        <th>Calorias</th>
                        <th>Carbohidratos</th>
                        <th>Grasas</th>
                        <th>Proteina</th>
                      </tr>
                  </table>
              </div>
          
              <div class="descripcion-comida">
                  <h4>${nombre}</h4>
                  <p id="gramaje">${gramaje}</p>
                  <p id="descripcion">${descripcion}</p>
                  <p>$<span id="precio">${precio}</span></p>
                <a href="#" id="${id}" class="btn-buy">Añadir al carrito</a>
              </div>
            </div>
            `;
            cleanHtml()
            fuerte.appendChild(descripcionPedido);
          }
        });
      })
    }
})
}



  function cargarPostres(){
    const container = document.querySelector(".postres")
    menu.forEach(elemento =>{
      const {foto, nombre, id} = elemento

      if(elemento.categoria === "postres"){
        const plato = document.createElement("div")
        plato.classList.add("swiper-slide")
        plato.innerHTML = `
                          <img src="${foto}">
                            <div class="info">
                                <h4>${nombre}</h4>
                                <img src="img/arrow.png" class="arrow" id="${id}">
                            </div>
        `
        container.appendChild(plato)
      }
    })
  }


function descripcionPostre() {
  const botonPedido = document.querySelectorAll(".arrow");
  
  menu.forEach(elemento => {
    const {nombre, foto, descripcion, gramaje, precio, id, kcal, carbohidrados, grasas, proteina} = elemento

    if(elemento.categoria === "postres"){
      botonPedido.forEach(boton =>{
      boton.addEventListener('click', (e) => {
        
        const idPlato = e.target.getAttribute("id")

        if (idPlato == id){
        const descripcionPedido = document.createElement("p");

        descripcionPedido.innerHTML = `
        <div class="descripcion-plato postres">
          <div class="foto-comida">
              <img src="${foto}" alt="">

              <table>
                <h3>Información nutricional:</h3>
                <tr>
                  <td>${kcal}Kcal</td>
                  <td>${carbohidrados}g</td>
                  <td>${grasas}g</td>
                <td>${proteina}g</td>
                </tr>
                <tr>
                  <th>Calorias</th>
                  <th>Carbohidratos</th>
                  <th>Grasas</th>
                  <th>Proteina</th>
                </tr>
              </table>
          </div>
    
          <div class="descripcion-comida">
            <h4>${nombre}</h4>
            <p id="gramaje">${gramaje}</p>
            <p id="descripcion">${descripcion}</p>
            <p>$<span id="precio">${precio}</span></p>
            <a href="#" id="${id}" class="btn-buy">Añadir al carrito</a>
          </div>
        </div>
        `;
        cleanHtml()
        postres.appendChild(descripcionPedido);
        }
        });
      })
    }
  })
}



function cargarBebidas(){
  const container = document.querySelector(".bebidas")
  menu.forEach(elemento =>{
    const {foto, nombre, id} = elemento

    if(elemento.categoria === "bebidas"){
      const plato = document.createElement("div")
        plato.classList.add("swiper-slide")
        plato.innerHTML = `
                          <img src="${foto}">
                            <div class="info">
                                <h4>${nombre}</h4>
                                <img src="img/arrow.png" class="arrow" id="${id}">
                            </div>
        `
        container.appendChild(plato)
    }
  })
}


function descripcionBebida() {
const botonPedido = document.querySelectorAll(".arrow");

menu.forEach(elemento => {
  const {nombre, foto, descripcion, gramaje, precio, id, kcal, carbohidrados, grasas, proteina} = elemento

  if(elemento.categoria === "bebidas"){
    botonPedido.forEach(boton =>{
    boton.addEventListener('click', (e) => {
      
      const idPlato = e.target.getAttribute("id")

      if (idPlato == id){
      const descripcionPedido = document.createElement("p");

      descripcionPedido.innerHTML = `
      <div class="descripcion-plato bebidas">
        <div class="foto-comida">
            <img src="${foto}" alt="">

            <table>
                <h3>Información nutricional:</h3>
                <tr>
                  <td>${kcal}Kcal</td>
                  <td>${carbohidrados}g</td>
                  <td>${grasas}g</td>
                 <td>${proteina}g</td>
                </tr>
                <tr>
                  <th>Calorias</th>
                  <th>Carbohidratos</th>
                  <th>Grasas</th>
                  <th>Proteina</th>
                </tr>
            </table>
        </div>
  
        <div class="descripcion-comida">
          <h4>${nombre}</h4>
          <p id="gramaje">${gramaje}</p>
          <p id="descripcion">${descripcion}</p>
          <p>$<span id="precio">${precio}</span></p>
          <a href="#" id="${id}" class="btn-buy">Añadir al carrito</a>
        </div>
      </div>
      `;
      cleanHtml()
      bebidas.appendChild(descripcionPedido);
      }
      });
    })
  }
})
}


function cargarFusion(){
  const container = document.querySelector(".fusiones")
  menu.forEach(elemento =>{
    const {foto, nombre, id} = elemento

    if(elemento.categoria === "fusion"){
      const plato = document.createElement("div")
        plato.classList.add("swiper-slide")
        plato.innerHTML = `
                          <img src="${foto}">
                            <div class="info">
                                <h4>${nombre}</h4>
                                <img src="img/arrow.png" class="arrow" id="${id}">
                            </div>
        `
        container.appendChild(plato)
    }
  })
}


function descripcionFusion() {
const botonPedido = document.querySelectorAll(".arrow");

menu.forEach(elemento => {
  const {nombre, foto, descripcion, gramaje, precio, id, kcal, carbohidrados, grasas, proteina} = elemento

  if(elemento.categoria === "fusion"){
    botonPedido.forEach(boton =>{
    boton.addEventListener('click', (e) => {
      
      const idPlato = e.target.getAttribute("id")

      if (idPlato == id){
      const descripcionPedido = document.createElement("p");

      descripcionPedido.innerHTML = `
      <div class="descripcion-plato fusiones">
        <div class="foto-comida">
            <img src="${foto}" alt="">

            <table>
                <h3>Información nutricional:</h3>
                <tr>
                  <td>${kcal}Kcal</td>
                  <td>${carbohidrados}g</td>
                  <td>${grasas}g</td>
                 <td>${proteina}g</td>
                </tr>
                <tr>
                  <th>Calorias</th>
                  <th>Carbohidratos</th>
                  <th>Grasas</th>
                  <th>Proteina</th>
                </tr>
            </table>
        </div>
  
        <div class="descripcion-comida">
          <h4>${nombre}</h4>
          <p id="gramaje">${gramaje}</p>
          <p id="descripcion">${descripcion}</p>
          <p>$<span id="precio">${precio}</span></p>
          <a href="#" id="${id}" class="btn-buy">Añadir al carrito</a>
        </div>
      </div>
      `;
      cleanHtml()
      fusion.appendChild(descripcionPedido);
      
      }
      });
    })
  }
})
}

function cleanHtml(){
  entrada.innerHTML = "";
  fuerte.innerHTML = "";
  bebidas.innerHTML = "";
  fusion.innerHTML = ""; 
  postres.innerHTML = "";
}


function alertAdd(){
  const botonCompra = document.querySelectorAll('.btn-buy');
  const containerDescripcion = document.querySelector(".descripcion-comida")
  // Itera sobre cada botón y agrega un evento de clic
  botonCompra.forEach(function(boton) {
      boton.addEventListener('click', function() {
          const mensaje = document.createElement('p');
          mensaje.innerHTML = 'Se ha agregado a la lista de compras';
          containerDescripcion.appendChild(mensaje);
      });
  });
}