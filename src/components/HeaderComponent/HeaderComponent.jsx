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
    <WrapperHeader>
      <Col span={6}>
        <WrapperTextHeader>
          LITISTORE
        </WrapperTextHeader>
      </Col>
      <Col span={12}>
        <ButtonInputSeacrh
          size='large'
          placeholder='Tìm sản phẩm'
        />
      </Col>
      <Col span={6} style={{ display: 'flex', gap: '20px' }}>
        <WrapperHeaderAccount>
          <UserOutlined style={{ fontSize: '30px' }}/>
          <div>
            <WrapperTextHeaderSmall>Đăng nhập / Đăng ký</WrapperTextHeaderSmall>
            <div>
              <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
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
