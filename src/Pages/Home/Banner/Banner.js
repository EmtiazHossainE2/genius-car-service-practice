import React from 'react';
import './Banner.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick/lib/slider';

// banner 
import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner3.jpg'
import banner4 from '../../../images/banner/banner4.jpg'
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className=''>
            {/* <Slider {...settings}>
                <div>
                    <img src={banner1} alt="" srcset="" />
                </div>
                <div>
                    <img src={banner2} alt="" srcset="" />
                </div>
                <div>
                    <img src={banner3} alt="" srcset="" />
                </div>
            </Slider> */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption >
                        <h3>Lamborghini Diablo</h3>
                        <p>Independent automobile repair shops  in the US may also achieve certification through manufacturer sponsored programs</p>
                        <button className='btn btn-danger'>Explore More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Ford Raptor</h3>
                        <p>Permits motorists more flexibility in selecting where their car is serviced.</p>
                        <button className='btn btn-danger'>Explore More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Porsche 911 Carrera</h3>
                        <p>A choice in service centers to select from; service department at a car dealership</p>
                        <button className='btn btn-danger'>Explore More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Jeep Gladiator</h3>
                        <p>Service through the testing and certification of repair and service professionals.</p>
                        <button className='btn btn-danger mb-3'>Explore More</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;