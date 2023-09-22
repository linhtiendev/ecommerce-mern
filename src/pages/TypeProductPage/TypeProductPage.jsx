import React from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Col, Pagination, Row } from 'antd'
import { WrapperNavbar, WrapperProducts } from './style'

const TypeProductPage = () => {
  const onChange = () => {}

  return (
    <div style={{ width: '100%', background: '#efefef'}}>
      <div style={{ width: '1270px', margin: '0 auto' , paddingTop: '20px'}}>
        <Row style={{ flexWrap: 'nowrap' }}>
            <WrapperNavbar span={5}>          
              <NavbarComponent />
            </WrapperNavbar>
            <Col span={19} style={{ margin: '0 0 0 78px' }}>
              <WrapperProducts>
                <CardComponent />
                <CardComponent /> 
                <CardComponent /> 
                <CardComponent /> 
                <CardComponent /> 
                <CardComponent /> 
              </WrapperProducts>
              <Pagination 
                style={{ textAlign: 'center', marginTop: '20px' }}
                defaultCurrent={2} 
                total={500} 
                onChange={onChange}
              />
            </Col>
            
        </Row>
      </div>
    </div>
  )
}

export default TypeProductPage
