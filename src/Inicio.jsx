import React from 'react'
import { useState, useEffect,useRef } from 'react'

function Inicio() {

  const [datos, setDatos] = useState([]);

  

 
 
  
 

  
 

  const { VITE_PLACEHOLDER } = import.meta.env

  useEffect(() => {
    const controller = new AbortController()
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
      signal: controller.signal

    }
    fetch(fetch(VITE_PLACEHOLDER,options)
    .then(response => response.json())
    .then(data =>{
      console.log(data);
      setDatos(data)} )
    .catch(err=>console.log(err))  
    .finally(() => controller.abort())
    )
      
      
      

  }, []);
   
  
    
    

  return (
    <><section  className='seccion' >
      <h1 className='seccion__encabezado'>Triage</h1>
      <div className='seccion__contenedor'>
    
      {datos.map((dato)=>{
        return  <div  key={dato.id}  className= 'seccion__tarjeta'>
        <h2 className='seccion__titulo'>{dato.company.name}</h2>
        <div className='seccion__usuario'>
          <p className='usuario__icono'>{dato.icono}</p>
          <h2 className='usuario__nombre'>{dato.name}</h2>
        </div>
        <p className='usuario__mensaje'>{dato.company.catchPhrase}</p>

      </div>
      })}
     
     
      
      
      </div> 
    </section>

    </>
  )
}

export default Inicio