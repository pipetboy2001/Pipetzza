// context/DataProvider.js
import React, { createContext, useState, useEffect } from "react";

// Crear el contexto
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // Estado global para el carrito
  const [carrito, setCarrito] = useState(() => {
    // Inicializar el carrito con el valor de localStorage
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    return savedCart;
  });

  // Estado para el total del carrito
  const total = carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0);

  // Actualizar carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(carrito));
  }, [carrito]);

  return (
    <DataContext.Provider value={{ carrito, setCarrito, total }}>
      {children}
    </DataContext.Provider>
  );
};
