import React from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Col, Row } from 'antd'

const TypeProductPage = () => {
  return (
    <Row style={{ padding: '20px 120px', background: '#efefef', flexWrap: 'nowrap' }}>
        <Col 
            span={4}
            style={{ background: '#fff', marginRight: '10px', borderRadius: '10px', padding: '10px' }}    
        >
            <NavbarComponent />
        </Col>
        <Col span={20}>
            <CardComponent /> 
        </Col>
    </Row>
  )
}

export default TypeProductPage
