import React from 'react'

export const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-column">
                    <h3>Información</h3>
                    <ul>
                        <li><a href="#">Sobre nosotros</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Preguntas frecuentes</a></li>

                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Redes sociales</h3>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="#">Terminos y condiciones</a></li>
                        <li><a href="#">Politicas de privacidad</a></li>
                        <li><a href="#">Politicas de cookies</a></li>
                    </ul>
                </div>
            </div>
        </footer>
        
    )
}
