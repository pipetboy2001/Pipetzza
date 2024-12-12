import React, { useContext } from 'react';
import { DataContext } from '../data/DataProvider.jsx'; // Importar el contexto
import { FaTimes } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';
import { Button, Image } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';


import '../styles/Carrito.css';


const CarritoModal = ({ onClose }) => {
  const { carrito, setCarrito, total } = useContext(DataContext);
  console.log('esta bierto? ', onClose); 

  // Reducir cantidad
  const reduce = (id) => {
    setCarrito(carrito.map(item => {
      if (item.id === id) {
        item.cantidad = Math.max(item.cantidad - 1, 1); // No dejar que la cantidad sea menos de 1
      }
      return item;
    }));
  };

  // Aumentar cantidad
  const increase = (id) => {
    setCarrito(carrito.map(item => {
      if (item.id === id) {
        item.cantidad += 1;
      }
      return item;
    }));
  };

  // Eliminar producto
  const removeProducto = (id) => {
    if (window.confirm("¿Quieres suspender el producto?")) {
      setCarrito(carrito.filter(item => item.id !== id));
    }
  };

    return (
        <Modal show={onClose} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Su Carrito </Modal.Title>
            </Modal.Header>
            <Modal.Body className="carrito"> {/* Apply the 'carrito' class here */}
                {carrito.length === 0 ? (
                    <p>Tu carrito está vacío.</p>
                ) : (
                    <div className="carrito__center"> {/* Wrap items in 'carrito__center' */}
                        {carrito.map((producto) => (
                            <div key={producto.id} className="card card-carrito">
                                <img src={producto.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <div className="text-section">
                                        <h5 className="card-title fw-bold">{producto.title}</h5>
                                        <p>Cantidad:
                                        <Button variant="link" size="sm" onClick={() => reduce(producto.id)}>
                                            -
                                        </Button>
                                        {producto.cantidad}
                                        <Button variant="link" size="sm" onClick={() => increase(producto.id)}>
                                            +
                                        </Button>
                                    </p>
                                    </div>
                                    <div className="cta-section">
                                        <div>${producto.price * producto.cantidad}</div>
                                        <Button variant="danger" size="sm" onClick={() => removeProducto(producto.id)}>
                                        Eliminar
                                    </Button>
                                    </div>
                                </div>
                            </div>
                            
                        ))}
                        <hr />
                            <p>
                                <Alert variant="success" className="text-center">
                                    <strong style={{ fontSize: '1.5rem' }}>Total:</strong> <span style={{ fontSize: '1.5rem' }}>${total}</span>
                                </Alert>
                            </p>
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer className="carrito__footer"> {/* Apply 'carrito__footer' class */}
                <Button variant="secondary" onClick={() => setShow(false)}>
                    Cerrar
                </Button>
                <Button variant="primary" disabled={carrito.length === 0}>
                    Proceder al pago
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CarritoModal;