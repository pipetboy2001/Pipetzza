import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const OneProducto = ({ productos }) => {
    return (
        <div className="container mt-4">
            <div className="row">
                {productos && productos.length > 0 ? (
                    productos.map((producto, index) => (
                        <div key={index} className="col-md-4 col-sm-6 mb-4">
                            <div className="card shadow-sm">
                                <img
                                    src={producto.image}
                                    alt={producto.title}
                                    className="card-img-top"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{producto.title}</h5>
                                    <p className="card-text">{producto.description}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="text-muted">${producto.price}</span>
                                        <button className="btn btn-primary">Añadir al carrito</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No hay productos disponibles</p>
                )}
            </div>
        </div>
    );
};

export default OneProducto;
