import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'

import slider1 from '../../assets/images/slider/slider-ip15pro.png'
import slider2 from '../../assets/images/slider/slider-oppo-reno10.png'
import slider3 from '../../assets/images/slider/slider-ssgalaxy.jpg'
import slider4 from '../../assets/images/slider/slider-kieslect.jpg'

const HomePage = () => {
  const arr = ['TV', 'Laptop', 'Tu lanh']

  return (
    <>
    <div style={{ padding: '0 120px'}}>
      <WrapperTypeProduct>
        {arr.map((item) => {
          return (
            <TypeProduct 
              key={item} 
              name={item}
            />
          )
        })}
      </WrapperTypeProduct>
    </div>
    <div style={{ backgroundColor: '#efefef', padding: '30px 120px'}}>
      <SliderComponent
        sliderImage={[slider1, slider2, slider3, slider4]}
      />
      <div>
        hello
      </div>
    </div>
    </>
  )
}

export default HomePage

