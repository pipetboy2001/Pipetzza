import React, { useContext, useState } from 'react';
import { DataContext } from '../data/DataProvider.jsx';
import { Modal, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import './../Styles/Carrito.css';

const CarritoModal = ({ onClose }) => {
    const { carrito, setCarrito, total } = useContext(DataContext);
    const [show, setShow] = useState(true);
    const navigate = useNavigate();
    
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


    const handleProceedToCheckout = () => {
        // Verificar si navigate está disponible
        if (typeof navigate === 'function') {
            // Redirigir a la página de pago pasando el carrito y el total como estado
            navigate('/pagar', {
                state: {
                    carrito: carrito,
                    total: total
                }
            });
            onClose(false); // Cerrar el modal
        } else {
            console.error('navigate no está definido');
        }
    };



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
                                            <>
                                            <p>Cantidad:</p>
                                                <div className="cantidad-container">
                                                    <div className="button-cantidad button-down" onClick={() => reduce(producto.id)}></div>
                                                    <span className="cantidad-text">{producto.cantidad || 1}</span>
                                                    <div className="button-cantidad button-up" onClick={() => increase(producto.id)}></div>
                                                </div>
                                            </>
                                            )
                                        }
                                    </div>
                                    <div className="cta-section">
                                        <div>${Math.floor(producto.price * (producto.cantidad || 1))}</div>
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
                                <span style={{ fontSize: '1.5rem' }}>${Math.floor(total)}</span>
                        </Alert>
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer className="carrito__footer">
                <Button variant="secondary" onClick={() => onClose(false)}>
                    Cerrar
                </Button>
                <Button
                    variant="primary"
                    disabled={carrito.length === 0}
                    onClick={handleProceedToCheckout}
                >
                    Proceder al pago
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CarritoModal;