import { Button } from 'antd'
import React from 'react'

const ButtonComponent = ({ size, styleButton, styleTextButton, textButton, ...rest}) => {
  return (
    <Button 
        size={size} 
        style={styleButton} 
        {...rest}
        // icon={<SearchOutlined style={{ fontSize: '15px' }} />}
    >
        <span
            style={styleTextButton}
        >
            {textButton}
        </span>
    </Button>
  )
}

export default ButtonComponent
