

document.addEventListener("DOMContentLoaded", () => {
    cargarImagenes()
   
});


function cargarImagenes() {
    const container = document.querySelector("#container-img")
    imagenes.forEach(imagen => {
        const { imgPais, titulo1, id } = imagen
        const cardsImg = document.createElement("div")
        cardsImg.classList.add("cards-img")
        cardsImg.innerHTML += `
        
            <img src="${imgPais}" >
            
            <div class="descripcion">
                <h5>${titulo1}</h5>  
                <button class="btn-verMas" id="${id} "href="#boton">See more</button>
            </div>
            
        `
        container.appendChild(cardsImg)
    })
    descripcionImagen()
}







function descripcionImagen(){
    const entrada = document.querySelector(".entrada");
    
    const botonPedido = document.querySelectorAll(".btn-verMas");
  

        botonPedido.forEach(boton =>{
        boton.addEventListener('click', (e) => {
          limpiarDescripcion()

            const idPlato = e.target.getAttribute("id")
            const resultado = imagenes.filter(imagen => imagen.id == idPlato)
            resultado.forEach (result =>{
              const {img, titulo, des} = result
              const descripcionPedido = document.createElement("p");
              descripcionPedido.innerHTML = `
          <div class="descripcion-semana">
            <div class="foto-comida">
              <img src="${img}" alt="">
            </div>
        
            <div class="descripcion-comida">
              <h4>${titulo}</h4>
              <p id="des">${des}</p>
            </div>
          </div>
          `;
        entrada.appendChild(descripcionPedido);
            })})
            
                

            
        
      })}

      
    
function limpiarDescripcion(){
  const entradaDescripcion = document.querySelector(".entrada");
  while (entradaDescripcion.firstChild){
    entradaDescripcion.removeChild(entradaDescripcion.firstChild)
  }
}


const reservarCurso = document.querySelector("#reservarCurso")

reservarCurso.addEventListener('click', abrirSweet)

 function abrirSweet(){
      Swal.fire({
        title: "Reserva tu cupo!",
        html: `
        <div class="inputs">
            <form id="formularioCurso" class="formularioCurso">
                <label for="">Name:</label>
                <input type="text" id="input1">
                <label for="">Email:</label>
                <input type="email" id="input2">
                <label for="">Contact Phone:</label>
                <input type="number" id="input3">
            </form>
        </div>
        <p>An adventure full of amazing preparations awaits you!
        </p>
        `,

        
        
    }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Book successfully!",
            text: "Soon you will enjoy all our content",
            icon: "success"
          });
          
        }
      })}



