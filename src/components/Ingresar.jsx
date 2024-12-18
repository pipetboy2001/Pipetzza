import React, { useState } from 'react';

const Ingresar = () => {

    return (
        <div className="vh-100 d-flex align-items-center justify-content-center text-center bg-dark text-white">
            <div>
                <h1 className="display-3 mb-3">🚧 En construcción 🚧</h1>
                <p className="lead mb-4">¡Estamos trabajando duro para ofrecerte la mejor experiencia!</p>
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
                <p className="mt-4">Proximamente en Pipetzza</p>
            </div>
        </div>
    );
};

export default Ingresar;