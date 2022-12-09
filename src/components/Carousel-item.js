import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const HeroSlider = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={7000}>
                    <Link to="/Crear">
                        <img
                            className="d-block w-100"
                            src="https://i.imgur.com/s3M0Xmd.png"
                            alt="Primera publicidad"
                        />
                    </Link>
                </Carousel.Item>

                <Carousel.Item interval={7000}>
                    <Link to="/menu">
                        <img
                            className="d-block w-100"
                            src="https://i.imgur.com/i8FjU66.png"
                            alt="NotVegan"
                        />
                    </Link>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
export default HeroSlider