import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from "context/DataProvider";
import { useParams } from "react-router-dom";
import { ProductoItem } from "./ProductoItem";
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ProductosDestacados = () => {
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
      <Link to="/menu">
        <div class="d-grid gap-2">
          <button type="button" class="btn btn-danger btn-lg btn-rounded">Ver Menu</button>
        </div>
      </Link>

      <div className="productos">
        {
          productos.map((producto) => {
            if ((item < 3) && ("pizza" === producto.category)) {
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
