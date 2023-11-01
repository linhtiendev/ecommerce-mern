import { Badge, Col } from 'antd'
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
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HeaderComponent = () => {

  const navigate = useNavigate()
  // lay data redux
  const user = useSelector((state) => state.user)
  const handleNavigateLogin = () => {
    navigate('/sign-in')
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <WrapperHeader>
        <Col span={5}>
          <WrapperTextHeader>
            LITISTORE
          </WrapperTextHeader>
        </Col>
        <Col span={12} >
          <ButtonInputSeacrh
            size='large'
            placeholder='Tìm sản phẩm'
          />
        </Col>
        <Col span={7} style={{ display: 'flex', gap: '130px', alignItems: 'center' }}>
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: '30px' }}/>
            {user?.name ? (
              <div style={{ cursor: 'pointer'}}>{user.name}</div>
            ) : (
              <div onClick={handleNavigateLogin} style={{ cursor: 'pointer'}}>
                <WrapperTextHeaderSmall>Đăng nhập / Đăng ký</WrapperTextHeaderSmall>
                <div>
                  <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                  <CaretDownOutlined />
                </div>
              </div>
            )}
          </WrapperHeaderAccount>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Badge count={4} size='small'>
              <ShoppingCartOutlined style={{ fontSize: '25px', color: 'white' }} />
            </Badge>
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent
