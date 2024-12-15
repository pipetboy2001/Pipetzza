import React, { useContext, useState } from 'react';
import { DataContext } from '../data/DataProvider.jsx';
import { Modal, Button, Alert } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import './../Styles/Carrito.css';

const CarritoModal = ({ onClose }) => {
    const { carrito, setCarrito, total } = useContext(DataContext);
    const [show, setShow] = useState(true);

    // Reducir cantidad
    const reduce = (id) => {
        const updatedCarrito = carrito.map(item => {
            if (item.id === id) {
                const newCantidad = Math.max((item.cantidad || 1) - 1, 1);
                return { ...item, cantidad: newCantidad };
            }
            return item;
        });
        setCarrito(updatedCarrito);
    };

    // Aumentar cantidad
    const increase = (id) => {
        const updatedCarrito = carrito.map(item => {
            if (item.id === id) {
                return { ...item, cantidad: (item.cantidad || 1) + 1 };
            }
            return item;
        });
        setCarrito(updatedCarrito);
    };

    // Eliminar producto
    const removeProducto = (id) => {
        if (window.confirm("¿Quieres eliminar el producto?")) {
            setCarrito(carrito.filter(item => item.id !== id));
        }
    };

    // obtener productos del carrito mediante console.log del carrito.map 

    console.log(carrito.map((producto) => (
        producto
    )));





    return (
        <Modal show={onClose} onHide={() => onClose(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Su Carrito 🛒</Modal.Title>
            </Modal.Header>
            <Modal.Body className="carrito">
                {carrito.length === 0 ? (
                    <p>Tu carrito está vacío.</p>
                ) : (
                    <div className="carrito__center">
                        {carrito.map((producto) => (
                            <div key={producto.id} className="card card-carrito">
                                <img src={producto.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <div className="text-section">
                                        <h5 className="card-title fw-bold">{producto.title}</h5>

                                        {/* Detalles de pizza personalizada */}
                                        {producto.tipo === 'personalizada' && (
                                            <div className="pizza-details">
                                                <p>Masa: {producto.masa}</p>
                                                <p>Tamaño: {producto.tamaño}</p>
                                                <p>Queso: {producto.queso}</p>
                                                {producto.carnes && producto.carnes.length > 0 && (
                                                    <p>Carnes: {producto.carnes.join(', ')}</p>
                                                )}
                                                {producto.vegetales && producto.vegetales.length > 0 && (
                                                    <p>Vegetales: {producto.vegetales.join(', ')}</p>
                                                )}
                                            </div>
                                        )}

                                        {/* Cantidad no aplicable en personalizadas*/}
                                        {producto.tipo !== 'personalizada' && (

                                            <p>Cantidad:
                                                <Button variant="link" size="sm" onClick={() => reduce(producto.id)}>
                                                    -
                                                </Button>
                                                {producto.cantidad || 1}
                                                <Button variant="link" size="sm" onClick={() => increase(producto.id)}>
                                                    +
                                                </Button>
                                            </p>
                                        )
                                        }
                                    </div>
                                    <div className="cta-section">
                                        <div>${(producto.price * (producto.cantidad || 1)).toLocaleString()}</div>
                                        <Button variant="danger" size="sm" onClick={() => removeProducto(producto.id)}>
                                            
                                            <FaTrash /> Eliminar
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <hr />
                        <Alert variant="success" className="text-center">
                            <strong style={{ fontSize: '1.5rem' }}>Total:</strong>
                            <span style={{ fontSize: '1.5rem' }}>${total.toLocaleString()}</span>
                        </Alert>
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer className="carrito__footer">
                <Button variant="secondary" onClick={() => onClose(false)}>
                    Cerrar
                </Button>
                <Button  variant="primary" disabled={carrito.length === 0}>
                    Proceder al pago
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CarritoModal;