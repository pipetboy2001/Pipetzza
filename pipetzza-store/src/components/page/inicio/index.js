import React from 'react'
import { Link } from "react-router-dom";
import Portada from "images/inicio.jpg";
import HeroSlider from '../../Carousel-item';

export default function Inicio() {
    return (
        <div>
            <HeroSlider />
            <h2>Escoge alguna de nuestras pizzas</h2>
        </div>
    )
}
