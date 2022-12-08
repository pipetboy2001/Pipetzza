import React from 'react'
import { Elecciones }  from 'components/Elecciones'
import { ProductosOnlyRefresco } from '../productos/ProductosOnlyRefresco';
import { ProductosOnlySalsa } from '../productos/ProductosOnlySalsa';

export const Crear = () => {
  return (
    <>
    <br></br>

      <Elecciones />
      <h2>Añade algo para tomar 🥤</h2>
      <ProductosOnlyRefresco />
      <h2>Añade tus salsas favoritas</h2>
      <ProductosOnlySalsa />
      
    </>

  )
}
