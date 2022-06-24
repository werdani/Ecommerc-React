import Carousel from 'react-bootstrap/Carousel';
import './file.css';

import React from "react";


export default function MySlider2() {
    return(
        <div>
               <Carousel>
               <Carousel.Item>
                  <img
                     className="images"
                     src="https://scx2.b-cdn.net/gfx/news/2022/clothes-shopping.jpg"
                     alt="First slide"
                  />
                  <Carousel.Caption>
                     <h3>First slide label</h3>
                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     className="images"
                     src="https://images.ctfassets.net/3s5io6mnxfqz/1jW0ClXkocn7TU6RbHnfVk/162bc75700473c6231c5612d13a0f702/AdobeStock_302958346.jpeg?fm=jpg&w=900&fl=progressive"
                     alt="Second slide"
                  />

                  <Carousel.Caption>
                     <h3>Second slide label</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     className="images"
                     src="https://www.thoughtco.com/thmb/C7RiS4QG5TXcBG2d_Sh9i4hFpg0=/3620x2036/smart/filters:no_upscale()/close-up-of-clothes-hanging-in-row-739240657-5a78b11f8e1b6e003715c0ec.jpg"
                     alt="Third slide"
                  />

                  <Carousel.Caption>
                     <h3>Third slide label</h3>
                     <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
               </Carousel.Item>
               </Carousel>
        
        </div>
    )
}
 
