import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMoreOption, WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'

import slider1 from '../../assets/images/slider/slider-ip15pro.png'
import slider2 from '../../assets/images/slider/slider-oppo-reno10.png'
import slider3 from '../../assets/images/slider/slider-ssgalaxy.jpg'
import slider4 from '../../assets/images/slider/slider-kieslect.jpg'

import CardComponent from '../../components/CardComponent/CardComponent'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'

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
    <div style={{ backgroundColor: '#efefef', padding: '30px 120px', height: '1000px'}}>
      <SliderComponent
        sliderImage={[slider1, slider2, slider3, slider4]}
      />
      <div
        style={{ 
          marginTop: '20px', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '20px',
          justifyContent: 'space-between',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
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
      
      {/* <NavbarComponent /> */}
    </div>
    </>
  )
}

export default HomePage

