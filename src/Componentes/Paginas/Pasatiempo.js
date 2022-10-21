import React from 'react'
import viodeojuegos from "./Imagenes/videojuegos.jpg";
import musica from "./Imagenes/musica.jpg";
import pirat from "./Imagenes/pirat.jpg";

const Pasatiempo = () => {
  return (
    <div>   <h1>Hobbies</h1>
    <p>Jugar videojuegos</p>
    
    <div id='videojuegos'>
        <img src={viodeojuegos} width='500' height='400'/>
    

    </div>

    <p>Escuchar Musica</p>
    
    <div id='musica'>
        <img src={musica} width='500' height='400'/>
    

    </div>

    <p>Ver peliculas</p>
    
    <div id='pirat'>
        <img src={pirat} width='500' height='400'/>
    

    </div>
    
    </div>
  )
}

export default Pasatiempo