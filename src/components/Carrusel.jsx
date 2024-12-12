import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Styles/Carrusel.css';

const Carrusel = () => {
    return (
        <Carousel interval={7000} fade>
            <Carousel.Item>
                <Link to="/">
                    <img
                        className="d-block w-100"
                        src="https://i.imgur.com/gGEj7mU.png"
                        alt="Primera publicidad"
                    />
                </Link>
            </Carousel.Item>

            <Carousel.Item>
                <Link to="/Crear">
                    <img
                        className="d-block w-100"
                        src="https://i.imgur.com/s3M0Xmd.png"
                        alt="Crear"
                    />
                </Link>
            </Carousel.Item>

            <Carousel.Item>
                <Link to="/">
                    <img
                        className="d-block w-100"
                        src="https://i.imgur.com/i8FjU66.png"
                        alt="NotVegan"
                    />
                </Link>
            </Carousel.Item>
        </Carousel>
    );
};

export default Carrusel;
