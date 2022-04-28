import React from 'react'
import { Carousel } from 'react-bootstrap'

import '../../Styles/Carousel/Carousel.css'

import image1 from '../../assets/image12.jpg'
import image2 from '../../assets/image10.jpg'
import image3 from '../../assets/image1.jpg'

function Slider() {
  return (
    <Carousel className="wrapper" fade variant="dark">
        <Carousel.Item interval={3000}>
            <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h5>First slide label</h5>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
            />
            <Carousel.Caption>
            <h5>Second slide label</h5>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <img
            className="d-block w-100"
            src={image3}
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