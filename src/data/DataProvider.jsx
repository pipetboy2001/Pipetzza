import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    return savedCart;
  });

  // Calcula el total de manera dinámica
  const total = carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0);

  // Función para vaciar el carrito
  const vaciarCarrito = () => {
    setCarrito([]); // Establece el carrito como un array vacío
    localStorage.removeItem('cart'); // Limpia el carrito en localStorage
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(carrito));
  }, [carrito]);

  return (
    <DataContext.Provider value={{
      carrito,
      setCarrito,
      total,
      vaciarCarrito  // Añade esta línea
    }}>
      {children}
    </DataContext.Provider>
  );
};