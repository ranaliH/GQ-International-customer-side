import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/carousel';
import p1 from '../../../images/gq1.jpg';
import p2 from '../../../images/gq2.jpg';
import p3 from '../../../images/gq3.jpg';

class SlideShow extends Component {
  render() {
    return (
    
      

      <Carousel>
      <Carousel.Item interval={600}>
        <img
          className="d-block w-100"
          src={p1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>GQ INTERNATIONAL</h3>
          <p>Specialist in Auto Door Handles</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={600}>
        <img
          className="d-block w-100"
          src={p2}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h3>GQ INTERNATIONAL</h3>
          <p>Specialist in Auto Door Handles</p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={600}>
        <img
          className="d-block w-100"
          src={p3}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h3>GQ INTERNATIONAL</h3>
          <p>Specialist in Auto Door Handles</p>
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>






    );
  }
}

export default SlideShow;
