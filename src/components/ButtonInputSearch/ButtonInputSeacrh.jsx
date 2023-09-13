import { Button, Input } from 'antd'
import React from 'react'

// icon ant-design
import {
  SearchOutlined,
} from '@ant-design/icons';

const ButtonInputSeacrh = (props) => {
    // truyen props
    const {size, placeholder, textButton,} = props;
  return (
    <div style={{ display: 'flex', backgroundColor: 'white'}}>
      <Input size={size} placeholder={placeholder} bordered={false}/>
      <Button style={{ border: 'none', borderRadius: '5px' }} size={size} bordered={false} icon={<SearchOutlined style={{ fontSize: '15px' }} />}>{textButton}</Button>
    </div>
  )
}

export default ButtonInputSeacrh
