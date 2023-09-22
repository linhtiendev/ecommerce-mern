import React from 'react'
import {
    StyleNameProduct,
    WrapperCardStyle,
    WrapperDiscountText,
    WrapperPriceText,
    WrapperRatingText,
    WrapperStyleTextSell
} from './style'
import { StarFilled } from '@ant-design/icons'
import imgnew from '../../assets/images/imgtitle/new.png'

const CardComponent = () => {
    return (
        <WrapperCardStyle
            hoverable
            style={{ width: 220, padding: '15px' }}
            bodyStyle={{ padding: '15px 0 10px 0', textAlign: 'center' }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <img src={imgnew} alt='logo new' style={{ width: '80px', height: '40px', position: 'absolute', top: '0', left: '0'}}/>
            <StyleNameProduct>
                Iphone 15 Promax
            </StyleNameProduct>
            <WrapperRatingText>
                <span style={{ marginRight: '5px' }}>
                    <span>4.95 </span><StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                </span>
                <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
            </WrapperRatingText>
            <WrapperPriceText>
                30.000.000đ
                <WrapperDiscountText>
                    -5%
                </WrapperDiscountText>
            </WrapperPriceText>
        </WrapperCardStyle>
    )
}

export default CardComponent
