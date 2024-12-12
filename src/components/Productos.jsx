import React, { useState, useEffect, useContext, useRef } from 'react';
import { DataContext } from '../data/DataProvider.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/productos.css';

const Productos = () => {
    const [productos, setProductos] = useState({});
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('promociones');
    const { carrito, setCarrito } = useContext(DataContext);
    const [showNotification, setShowNotification] = useState(false); // Estado para controlar la visibilidad de la notificación

    // Crear un ref para cada categoría
    const categoryRefs = {
        pizzas: useRef(null),
        bebidas: useRef(null),
        acompanamientos: useRef(null),
        extras: useRef(null),
        promociones: useRef(null)
    };

    useEffect(() => {
        fetch('/productos.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al cargar el archivo JSON');
                }
                return response.json();
            })
            .then(data => {
                setProductos(data);
            })
            .catch(error => {
                console.error('Error al cargar productos:', error);
            });
    }, []);

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

    const handleCategoryChange = (categoria) => {
        setCategoriaSeleccionada(categoria);

        // Verificar si el scroll está cerca de la parte superior
        if (window.scrollY < 350) {
            // Mover el scroll unos píxeles hacia abajo solo si está cerca de la parte superior
            window.scrollBy({
                top: 200,
                behavior: 'smooth' // Comportamiento suave
            });
        }
    };

    const renderCategory = (category, categoryRef) => {
        if (!category || category.length === 0) {
            return <p>No hay productos disponibles en esta categoría.</p>;
        }

        return (
            <div className="row" ref={categoryRef}>
                {category.map((producto) => (
                    <div key={producto.id} className="col-md-4 mb-4">
                        <div className="card producto-card" style={{ height: '100%' }}>
                            <img src={producto.image} className="card-img-top" alt={producto.title} />
                            <div className="card-body">
                                <h5 className="card-title">{producto.title}</h5>
                                <p className="card-text">{producto.description}</p>
                                <p className="card-text"><strong>${producto.price}</strong></p>
                                <button className="btn btn-success" onClick={() => handleAddToCart(producto)}>
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div>
            {/* Notificación de producto añadido */}
            <div className={`notification ${showNotification ? 'show' : ''}`}>
                Producto añadido al carrito
            </div>


            <div className="categoria-buttons">
                <button className="btn" onClick={() => handleCategoryChange('promociones')}>Promociones</button>
                <button className="btn" onClick={() => handleCategoryChange('pizzas')}>Pizzas</button>
                <button className="btn" onClick={() => handleCategoryChange('bebidas')}>Bebidas</button>
                <button className="btn" onClick={() => handleCategoryChange('acompanamientos')}>Acompañamientos</button>
                <button className="btn" onClick={() => handleCategoryChange('extras')}>Extras</button>
            </div>

            <div className="container mt-4">
                {productos[categoriaSeleccionada] ? renderCategory(productos[categoriaSeleccionada], categoryRefs[categoriaSeleccionada]) : <p>Cargando productos...</p>}
            </div>
        </div>
    );
};

export default Productos;
