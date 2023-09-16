import { Image } from 'antd';
import React from 'react'
import Slider from 'react-slick'

const SliderComponent = ({ sliderImage }) => {
    const settings = {
    //   dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };

    return (
        <Slider {...settings}>
            {sliderImage.map((image) => {
                return (
                    <Image key={image} src={image} alt='slider' preview={false} width='100%' height='330px'/>
                )
            })}
        </Slider>
    )
}

export default SliderComponent
