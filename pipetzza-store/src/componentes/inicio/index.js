import React from 'react'
import HeroSlider from '../publicidad/carousel-item';
import { ProductoLista } from "../productos/index"


export const Inicio = () => {
  return (
    <div>
      <HeroSlider />
      <h2>Ofertas tiempo limitado!</h2>
              < ProductoLista />
      
              
      <h2>Escoge alguna de nuestras pizzas</h2>
    </div>
  )
}
