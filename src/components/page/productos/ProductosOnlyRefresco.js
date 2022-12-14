import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from "context/DataProvider";
import { useParams } from "react-router-dom";
import { ProductoItem } from "./ProductoItem";
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

export const ProductosOnlyRefresco = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const [detalle, setDetalle] = useState([])
  const [url, setUrl] = useState(0)
  const [images, setImages] = useState('')
  const params = useParams();
  let item = 0;

  useEffect(() => {
    console.log('re render', params.id)
    item = 0;
    productos.forEach(producto => {
      if (producto.id === parseInt(params.id)) {
        setDetalle(producto)
        setUrl(0)
      }
    })
  }, [params.id, productos])

  console.log(url)

  useEffect(() => {
    const values = `${detalle.img1}${url}${detalle.img2}`;
    setImages(values)
  }, [url, params.id])

  const handleInput = (e) => {
    const number = e.target.value.toString().padStart(2, '01')
    setUrl(number)
  }

  return (
    <>
      <div className="productos">
        {
          productos.map((producto) => {
            if (("Refresco" === producto.category)) {
              item++;
              return <ProductoItem
                key={producto.id}
                title={producto.title}
                image={producto.image}
                description={producto.description}
                // category={producto.category}
                price={producto.price}
                id={producto.id}
              />
            }
          })
        }
      </div>

    </>
  )
}
