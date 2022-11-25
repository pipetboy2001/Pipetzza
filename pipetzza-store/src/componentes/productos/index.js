import React from 'react'

export const ProductoLista = () => {
  return (
    <>
    <h1 className='title'>productos</h1>
    <div className='productos'>
      <div className='producto'>
        <img src='https://picsum.photos/200/300' alt='producto' />
        <h3>Producto 1</h3>
        <p>Descripcion del producto</p>
        <p>$ 100</p>
        <button>Agregar al carrito</button>
        </div>
    </div>
    </>
  )
}
