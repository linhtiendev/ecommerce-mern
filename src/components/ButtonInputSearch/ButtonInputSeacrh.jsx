import React from 'react'

// icon ant-design
import {
  SearchOutlined,
} from '@ant-design/icons';

import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ButtonInputSeacrh = (props) => {
    // truyen props
    const { size, placeholder } = props;
  return (
    <div style={{ display: 'flex', backgroundColor: 'white'}}>
      <InputComponent 
        size={size} 
        placeholder={placeholder} 
        bordered={false}
      />
      <ButtonComponent 
        styleButton={{ border: 'none' }} 
        size={size} 
        icon={<SearchOutlined style={{ fontSize: '15px' }} />} 
        styleTextButton={{ fontSize: '15px' }}
        textButton={'Tìm kiếm'} 
      />
    </div>
  )
}

export default ButtonInputSeacrh
