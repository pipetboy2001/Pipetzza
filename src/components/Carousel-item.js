import React from 'react'
import { Carousel } from 'react-bootstrap'

const HeroSlider = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={7000}>
                    <img
                        className="d-block w-100"
                        src="https://i.imgur.com/s3M0Xmd.png"
                        alt="Primera publicidad"
                    />
                </Carousel.Item>

                <Carousel.Item interval={7000}>
                    <img
                        className="d-block w-100"
                        src="https://i.imgur.com/i8FjU66.png"
                        alt="NotVegan"
                    />
                </Carousel.Item>
                
                
            </Carousel>
        </>
    )
}

export default HeroSlider