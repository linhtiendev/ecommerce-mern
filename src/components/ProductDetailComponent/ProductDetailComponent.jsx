import { Button, Col, Image, InputNumber, Row } from 'antd'
import React from 'react'
import imageIp15pm from '../../assets/images/imgproduct/img-iphone15pmax.webp'
import imageIp15pmOption from '../../assets/images/imgproduct/ip15-promax.webp'
import { WrapperAddress, WrapperBtnPayProduct, WrapperInputQuantity, WrapperPayProduct, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQuantityProduct, WrapperStyleNameProduct, WrapperStyleTextSell, WrapperTextQuantity } from './style'
import { 
  StarFilled,
  PlusOutlined,
  MinusOutlined
} from '@ant-design/icons'

const ProductDetailComponent = () => {
  const onChange = () => {}

  return (
    <Row style={{ padding: '16px', background: '#fff', height: '610px'}}>
        <Col span={8}>
          <Image src={imageIp15pm} alt='image ip15pm' preview={false}/>
          <Row style={{ paddingTop: '10px' }}>
            <Col span={4}>
              <Image src={imageIp15pmOption} alt='image ip15pm option' preview={false}/>
            </Col>
            <Col span={4}>
              <Image src={imageIp15pmOption} alt='image ip15pm option' preview={false}/>
            </Col>
            <Col span={4}>
              <Image src={imageIp15pmOption} alt='image ip15pm option' preview={false}/>
            </Col>
            <Col span={4}>
              <Image src={imageIp15pmOption} alt='image ip15pm option' preview={false}/>
            </Col>
            <Col span={4}>
              <Image src={imageIp15pmOption} alt='image ip15pm option' preview={false}/>
            </Col>
            <Col span={4}>
              <Image src={imageIp15pmOption} alt='image ip15pm option' preview={false}/>
            </Col>
          </Row>
        </Col>
        <Col 
          span={16}
          style={{ paddingLeft: '14px'}}
        >
          <WrapperStyleNameProduct>
            Điện thoại di động iPhone 15 Pro Max (256GB) - Chính hãng VN/A
          </WrapperStyleNameProduct>
          <div>
            <StarFilled style={{ fontSize: '18px', color: 'yellow' }} />
            <StarFilled style={{ fontSize: '18px', color: 'yellow' }} />
            <StarFilled style={{ fontSize: '18px', color: 'yellow' }} />
            <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
          </div>
          <WrapperPriceProduct>
            <WrapperPriceTextProduct>
              30.000.000 <span>VNĐ</span>
            </WrapperPriceTextProduct>
          </WrapperPriceProduct>
          <WrapperAddress
            style={{ paddingBottom: '20px', borderBottom: '1px solid #bdb5b5'}}
          >
            <span>Giao đến </span>
            <span className='address'>Vườn Lài, Q.12, HCM</span> - 
            <span className='change-address'> Đổi địa chỉ</span>
          </WrapperAddress>
          <WrapperQuantityProduct 
            style={{ paddingBottom: '32px', borderBottom: '1px solid #bdb5b5'}}
          >
            <WrapperTextQuantity>Số lượng</WrapperTextQuantity>
            <WrapperInputQuantity>
              <Button color='#00483d' style={{ border: 'none' }}><MinusOutlined /></Button>
              <InputNumber style={{ border: '0 1px 0 1px solid grey' }} defaultValue={1} onChange={onChange} />
              <Button color='#00483d' style={{ border: 'none' }}><PlusOutlined /></Button>
            </WrapperInputQuantity>
          </WrapperQuantityProduct>
          <WrapperPayProduct>
            <WrapperBtnPayProduct 
              styleTextButton={{ fontSize: '16px', fontWeight: 'bold', color: 'white'}}
              textButton='Chọn mua'
            />
            <WrapperBtnPayProduct
              style={{ marginLeft: '15px', background: '#5a98d5' }} 
              styleTextButton={{ fontSize: '16px', fontWeight: 'bold', color: 'white'}}
              textButton='Mua trước trả sau'
            />
          </WrapperPayProduct>
        </Col>
    </Row>
  )
}

export default ProductDetailComponent
