import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMoreOption, WrapperProduct, WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'

import slider1 from '../../assets/images/slider/slider-ip15pro.png'
import slider2 from '../../assets/images/slider/slider-oppo-reno10.png'
import slider3 from '../../assets/images/slider/slider-ssgalaxy.jpg'
import slider4 from '../../assets/images/slider/slider-kieslect.jpg'

import CardComponent from '../../components/CardComponent/CardComponent'

const HomePage = () => {
  const arr = ['TV', 'Laptop', 'Tu lanh']

  return (
    <>
    <div style={{ width: '1270px', margin: '0 auto'}}>
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
    <div style={{ width: '100%', backgroundColor: '#efefef'}}>
      <div style={{ width: '1270px', margin: '0 auto', padding: '30px 0', height: '100%'}}>
        <SliderComponent
          sliderImage={[slider1, slider2, slider3, slider4]}
        />
        <WrapperProduct>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </WrapperProduct>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
          <WrapperButtonMoreOption 
          textButton='Xem thêm'
          type='outline'
          styleButton={{
            border: '1px solid #00483d',
            fontSize: '16px',
            fontWeight: '500',
            corlor: '#00483d',
            width: '240px', height: '38px',
            boxShadow: '2px 2px 2px gray',
          }}
        />
        </div>
      </div>
    </div>
    </>
  )
}

export default HomePage

