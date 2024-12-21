import React, { useState, useContext, useMemo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DataContext } from '../data/DataProvider.jsx';
import CarritoModal from './CarritoModal';

// Iconos
import { FaPizzaSlice } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { FaUserAlt } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa'; // Iconos para menú móvil
import { AiOutlineHome } from 'react-icons/ai';
// Estilos
import './../Styles/Header.css';

const logoUrl = "https://i.imgur.com/D1GXxkt.png";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const value = useContext(DataContext) || {
        carrito: [],
        menu: [false, () => { }]
    };

    const carrito = value.carrito;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const cantidadProductos = useMemo(() =>
        carrito.reduce((total, item) => total + item.cantidad, 0),
        [carrito]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="header-container">
            <div className="header-content">
                <Link to="/" className="logo-link" onClick={handleLinkClick}>
                    <img src={logoUrl} alt="Pipetzza" className="logo-img" />
                </Link>

                <nav className={`main-nav ${isMobileMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-links custom-navbar-font">
                        <li>
                            <Link to="/" className="nav-link" onClick={handleLinkClick}>
                                Inicio <AiOutlineHome />
                            </Link>
                        </li>
                        <li>
                            <Link to="/Crear" className="nav-link" onClick={handleLinkClick}>
                                Crea tu pizza <FaPizzaSlice />
                            </Link>
                        </li>
                        <li>
                            <Link to="/locales" className="nav-link" onClick={handleLinkClick}>
                                Sucursales <BsShop />
                            </Link>
                        </li>
                        <li>
                            <Link to="/ingresar" className="nav-link" onClick={handleLinkClick}>
                                Ingresar <FaUserAlt />
                            </Link>
                        </li>
                    </ul>
                </nav>

                <button
                    className="mobile-menu-toggle"
                    onClick={toggleMobileMenu}
                    aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                <div className="cart-container">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="cart-button"
                        aria-label="Abrir carrito de compras"
                    >
                        <FaShoppingCart />
                        {cantidadProductos > 0 && (
                            <span className="cart-count" aria-live="polite">
                                {cantidadProductos}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <CarritoModal
                    carrito={carrito}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </header>
    );
};

export default Header;