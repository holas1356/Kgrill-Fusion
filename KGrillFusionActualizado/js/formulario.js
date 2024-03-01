
const url = "http://localhost:4001/reservas";
/* exportar funsion para ingresar las reservas */
export const newReserva = async (reserva)=>{
    try {
        await fetch(url,{
            method: 'POST',
            body:JSON.stringify(reserva),
            headers:{
                'Content-Type' : 'application/json'
            }
        });

    } catch (error) { 
    }
}

const urlRegistro = "http://localhost:3000/registro";
/* exportar funsion para ingresar las reservas */
export const newRegistro = async (registro)=>{
    try {
        await fetch(urlRegistro,{
            method: 'POST',
            body:JSON.stringify(registro),
            headers:{
                'Content-Type' : 'application/json'
            }
            
        });
        inicioSesion()
     
    } catch (error) { 
    }
}

const urlCurso = "http://localhost:2000/Cursos";
/* exportar funsion para ingresar las reservas */
export const newCurso = async (Cursos)=>{
    try {
        await fetch(urlCurso,{
            method: 'POST',
            body:JSON.stringify(Cursos),
            headers:{
                'Content-Type' : 'application/json'
            }
            
        });
     
    } catch (error) { 
    }
}
