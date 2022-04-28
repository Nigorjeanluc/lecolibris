import React from 'react'
import { Carousel } from 'react-bootstrap'

import '../../Styles/Carousel/Carousel.css'

function Slider() {
  return (
    <Carousel className="wrapper" fade variant="dark">
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x500/09f/fff.png"
            alt="First slide"
            />
            <Carousel.Caption>
            <h5>First slide label</h5>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x500/09f/fff.png"
            alt="Second slide"
            />
            <Carousel.Caption>
            <h5>Second slide label</h5>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x500/09f/fff.png"
            alt="Third slide"
            />
            <Carousel.Caption>
            <h5>Third slide label</h5>
            {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}

export default Slider