import React, { useState, useEffect, useContext, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataContext } from '../data/DataProvider.jsx';
import '../Styles/productos.css';



const OneProducto = ({ productos }) => {

    const { carrito, setCarrito } = useContext(DataContext);
    const [showNotification, setShowNotification] = useState(false); // Estado para controlar la visibilidad de la notificación

    const handleAddToCart = (producto) => {
        const newCarrito = [...carrito];
        const productInCart = newCarrito.find(item => item.id === producto.id);

        if (productInCart) {
            productInCart.cantidad += 1;
        } else {
            newCarrito.push({ ...producto, cantidad: 1 });
        }

        setCarrito(newCarrito);
        console.log('Producto añadido al carrito:', producto);
        triggerNotification(); // Mostrar notificación al agregar un producto
    };

    const triggerNotification = () => {
        console.log("Notificación activada"); // Verifica si aparece en la consola
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };


    return (
        <div className="container mt-4">
            <div className={`notification ${showNotification ? 'show' : ''}`}>
                Producto añadido al carrito
            </div>


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
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => handleAddToCart(producto)}
                                        >
                                            Agregar al carrito

                                        </button>

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
