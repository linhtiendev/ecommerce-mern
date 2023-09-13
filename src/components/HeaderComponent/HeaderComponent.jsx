import { Col } from 'antd'
import React from 'react'

// style in component
import { 
  WrapperHeader, 
  WrapperHeaderAccount, 
  WrapperTextHeader,
  WrapperTextHeaderSmall,
} from './style'

// import Search from 'antd/lib/transfer/search'

// icon ant-design
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import ButtonInputSeacrh from '../ButtonInputSearch/ButtonInputSeacrh';

const HeaderComponent = () => {
  return (
    <>
    <WrapperHeader gutter={16}>
      <Col span={6}>
        <WrapperTextHeader>
          LITISTORE
        </WrapperTextHeader>
      </Col>
      <Col span={12}>
        <ButtonInputSeacrh
          size='large'
          placeholder='Tìm sản phẩm'
          textButton='Tìm kiếm'
        />
      </Col>
      <Col span={6} style={{ display: 'flex', gap: '20px' }}>
        <WrapperHeaderAccount>
          <UserOutlined style={{ fontSize: '30px' }}/>
          <div>
            <span>Đăng nhập / Đăng ký</span>
            <div>
              <span>Tài khoản</span>
              <CaretDownOutlined />
            </div>
          </div>
        </WrapperHeaderAccount>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ShoppingCartOutlined style={{ fontSize: '25px', color: 'white' }} />
          <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
        </div>
      </Col>
    </WrapperHeader>
    </>
  )
}

export default HeaderComponent
