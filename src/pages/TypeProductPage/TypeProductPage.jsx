import React from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Col, Pagination, Row } from 'antd'
import { WrapperNavbar, WrapperProducts } from './style'

const TypeProductPage = () => {
  const onChange = () => {}

  return (
    <div style={{ padding: '20px 120px', background: '#efefef', }}>
      <Row style={{ flexWrap: 'nowrap' }}>
          <WrapperNavbar span={4}>          
            <NavbarComponent />
          </WrapperNavbar>
          <Col span={20}>
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
  )
}

export default TypeProductPage
