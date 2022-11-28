import React from 'react'
import HeroSlider from '../../Carousel-item';
import {ProductosDestacados} from '../productos/ProductosDestacados';
import Button from 'react-bootstrap/Button';

export default function Inicio() {
    return (
        <div>
            <HeroSlider />
            <ProductosDestacados />

            
        </div>
    )
}
