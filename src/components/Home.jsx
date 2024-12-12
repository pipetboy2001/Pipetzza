// src/components/Home.jsx
import React from 'react';
import Carrusel from './Carrusel'; // Importamos el componente Carrusel
import Productos from './Productos'; // Importamos el componente Productos

const Home = () => {
    return (
        <div>
            <Carrusel />
            <Productos />
        </div>
    );
};

export default Home;
