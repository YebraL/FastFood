import React from 'react'

import img1 from '../assets/resImg1.jpeg'
import img2 from '../assets/resImg2.jpeg'
import img3 from '../assets/resImg3.jpeg'

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

function Home() {

  return (
    <div>
        <h4>Home</h4>

        <Carousel slide={true}>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Welcome To The Club</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Lets Build Our Network</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Sign Up</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    </div>
  )
}

export default Home