import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './../Styles/Footer.css';
const logoUrl = "https://i.imgur.com/D1GXxkt.png";

const PipetzzaFooter = () => {
    return (
        <footer className="bg-dark text-white py-5">
            <div className="container">
                <div className="row">
                    {/* Logo */}
                    <div className="col-12 col-md-3 mb-4 text-center text-md-start">
                        <img
                            src={logoUrl}
                            alt="Pipetzza Logo"
                            className="img-fluid"
                            style={{ maxHeight: '100px' }}
                        />
                    </div>

                    {/* Pipetzza */}
                    <div className="col-12 col-md-3 mb-4">
                        <h5 className="mb-3 custom-title-font">Pipetzza</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none">Trabaja con nosotros</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none">Acerca de nosotros</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none">Ingredientes</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none">Ayuda</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none">Preguntas frecuentes</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none">Contacto</a></li>
                            <li><a href="tel:79148614" className="text-white text-decoration-none">Pide por teléfono 7914 8614</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="col-12 col-md-3 mb-4">
                        <h5 className="mb-3 custom-title-font">Legal</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none">Términos y Condiciones</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none">Política de privacidad</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none">Código Ético</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none">Canal Ético</a></li>
                        </ul>
                    </div>

                    {/* Locales */}
                    <div className="col-12 col-md-3 mb-4">
                        <h5 className="mb-3 custom-title-font">Locales</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/locales" className="text-white text-decoration-none">Nuestros locales</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Redes Sociales y Copyright */}
                <div className="row border-top border-secondary pt-4 mt-4 text-center">
                    <div className="col-12 mb-3">
                        <div className="d-flex justify-content-center space-x-3">
                            {/* Instagram */}
                            <a href="#" className="text-white mx-2" aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>

                            {/* Facebook */}
                            <a href="#" className="text-white mx-2" aria-label='Facebook'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>

                            {/* Twitter (X) */}
                            <a href="#" className="text-white mx-2" aria-label='Twitter'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.954-2.178-1.55-3.594-1.55-2.717 0-4.92 2.203-4.92 4.919 0 .386.044.763.128 1.124-4.088-.205-7.719-2.164-10.148-5.144-.424.729-.666 1.577-.666 2.476 0 1.709.87 3.216 2.188 4.099-.807-.026-1.566-.248-2.228-.616v.062c0 2.385 1.697 4.374 3.95 4.828-.413.112-.849.172-1.296.172-.317 0-.626-.031-.928-.089.627 1.956 2.444 3.379 4.6 3.419-1.684 1.319-3.809 2.105-6.115 2.105-.397 0-.789-.023-1.175-.069 2.179 1.396 4.768 2.209 7.548 2.209 9.057 0 14.01-7.504 14.01-14.009 0-.213-.005-.425-.015-.637.961-.695 1.796-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="col-12">
                        <p className="small mb-0">© 2023 Pipetzza. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default PipetzzaFooter;
