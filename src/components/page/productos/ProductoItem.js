import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "context/DataProvider";
import { BsCartPlus } from "react-icons/bs";

export const ProductoItem = ({ title, image, description, category, price, id }) => {
  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;

  return (
    <div key={id} className="producto">
      <Link to={`/Menu/${id}`}>
        <div className="producto__img">
          <img src={image} alt={title} />
        </div>
      </Link>
      <div className="producto__footer">
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{category}</p>
        <p className="price">${price} </p>
      </div>
      <div className="bottom">
        <center>
          <button onClick={() => addCarrito(id)} className="btn">Añadir al carrito <BsCartPlus /> </button>
        </center>
      </div>
    </div>
  );
};
