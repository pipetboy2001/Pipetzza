import React, { useState, useContext, useMemo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DataContext } from '../data/DataProvider.jsx';
import CarritoModal from './CarritoModal';

// Iconos
import { BiFoodMenu } from "react-icons/bi";
import { FaPizzaSlice } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { FaUserAlt } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';

// Estilos
import './../Styles/Header.css';

const logoUrl = "https://i.imgur.com/D1GXxkt.png";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation(); // Hook para detectar cambios en la ruta

    const value = useContext(DataContext) || {
        carrito: [],
        menu: [false, () => { }]
    };

    const carrito = value.carrito;
    const menu = value.menu;

    // Efecto para hacer scroll al top cuando cambia la ruta
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Hace el scroll suave
        });
        setIsMobileMenuOpen(false); // Cierra el menú móvil al cambiar de página
    }, [location.pathname]);

    const cantidadProductos = useMemo(() =>
        carrito.reduce((total, item) => total + item.cantidad, 0),
        [carrito]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const abrirModal = () => {
        setIsModalOpen(true);
        setIsMobileMenuOpen(false);
    };

    const cerrarModal = () => {
        setIsModalOpen(false);
    };

    // Función para manejar el click en los enlaces
    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="header-container">
            <div className="header-content">
                {/* Logo */}
                <Link to="/" className="logo-link" onClick={handleLinkClick}>
                    <img src={logoUrl} alt="Pipetzza" className="logo-img" />
                </Link>

                {/* Botón de menú móvil */}
                <button
                    className="mobile-menu-toggle"
                    onClick={toggleMobileMenu}
                    aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Navegación */}
                <nav className={`main-nav ${isMobileMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-links custom-navbar-font">
                        <li>
                            <Link
                                to="/"
                                className="nav-link"
                                onClick={handleLinkClick}
                            >
                                Inicio <AiOutlineHome />
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Crear"
                                className="nav-link"
                                onClick={handleLinkClick}
                            >
                                Crea tu pizza <FaPizzaSlice />
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/locales"
                                className="nav-link"
                                onClick={handleLinkClick}
                            >
                                Sucursales <BsShop />
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/ingresar"
                                className="nav-link"
                                onClick={handleLinkClick}
                            >
                                Ingresar <FaUserAlt />
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Carrito */}
                <div className="cart-container">
                    <button
                        onClick={abrirModal}
                        className="cart-button"
                        aria-label="Abrir carrito de compras"
                    >
                        <FaShoppingCart />
                        {cantidadProductos > 0 && (
                            <span
                                className="cart-count"
                                aria-live="polite"
                            >
                                {cantidadProductos}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* Modal de Carrito */}
            {isModalOpen && (
                <CarritoModal
                    carrito={carrito}
                    onClose={cerrarModal}
                />
            )}
        </header>
    );
};

export default Header;