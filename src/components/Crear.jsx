import React, { useState, useEffect } from 'react';
import CrearPizza from './CrearPizza';
import OneProducto from './OneProducto';

export const Crear = () => {
    const [productos, setProductos] = useState({});

    useEffect(() => {
        fetch('/productos.json')
            .then(response => response.json())
            .then(data => {
                setProductos(data); // Guarda todo el JSON
            })
            .catch(error => {
                console.error('Error al cargar los productos:', error);
            });
    }, []);

    return (
        <>
            <CrearPizza />

            <h2>Añade algo para tomar 🥤</h2>
            <OneProducto productos={productos.bebidas} />

            <h2>Añade algo más de comer</h2>
            <OneProducto productos={productos.acompanamientos} />

            <h2>Añade tus salsas favoritas</h2>
            <OneProducto productos={productos.extras} />

            <h2>Pide una pizza deliciosa 🍕</h2>
            <OneProducto productos={productos.pizzas} />
        </>
    );
};

export default Crear;
