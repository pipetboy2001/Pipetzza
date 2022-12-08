import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "context/DataProvider";

export const ProductoItemPersonalizada = ({ title, image, description, category, price, id}) => {
  const value = useContext(DataContext);
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
      <center>
        <Link to="/crear">
          <div className="bottom">
            <button className="btn">Crear tu pizzas🍕</button>
          </div>
        </Link>
      </center>
    </div>
  );
};
