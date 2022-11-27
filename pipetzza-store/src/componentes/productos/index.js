import React from 'react'
import { img } from '../../images/img01.jpg'

export const ProductoLista = () => {
  return (
    <>
      <div className='productos'>
        <div className='producto'>
          <a href="#">
            <div className='producto_img'>
              <img src="https://picsum.photos/300/300" alt="img01" />
            </div>
          </a>
          <div className='producto_footer'>
            <h1> Pizza</h1>
            <p> rica pizza </p>
            <p className='price'> $4500</p>
          </div>
          <div className='bottom'>
            <button className='btn'>
              Add to Cart
            </button>
            <div>
              <a href="#" className='btn'>View More</a>
            </div>
          </div>
        </div>

        <div className='producto'>
          <a href="#">
            <div className='producto_img'>
              <img src="https://picsum.photos/300/300" alt="img01" />
            </div>
          </a>
          <div className='producto_footer'>
            <h1> Pizza</h1>
            <p> rica pizza </p>
            <p className='price'> $4500</p>
          </div>
          <div className='bottom'>
            <button className='btn'>
              Add to Cart
            </button>
            <div>
              <a href="#" className='btn'>View More</a>
            </div>
          </div>
        </div>

        <div className='producto'>
          <a href="#">
            <div className='producto_img'>
              <img src="https://picsum.photos/300/300" alt="img01" />
            </div>
          </a>
          <div className='producto_footer'>
            <h1> Pizza</h1>
            <p> rica pizza </p>
            <p className='price'> $4500</p>
          </div>
          <div className='bottom'>
            <button className='btn'>
              Add to Cart
            </button>
            <div>
              <a href="#" className='btn'>View More</a>
            </div>
          </div>
        </div>



      </div>
    </>
  )
}
