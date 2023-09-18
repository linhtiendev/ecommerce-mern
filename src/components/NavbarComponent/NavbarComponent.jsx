import React from 'react'
import { WrapperContent, WrapperLabelText, WrapperValueText } from './style'
import { Checkbox, Rate } from 'antd'

const NavbarComponent = () => {

  const onChange = () => {}

  // hàm render loại sản phẩm
  const renderContent = (type, options) => {
    switch (type) {
      case 'text':
        return options.map((option) => {
          return <WrapperValueText>{option}</WrapperValueText>
        })
      case 'checkbox':
        return (
          <Checkbox.Group 
            style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '5px' }} 
            onChange={onChange}>
            {options.map((option) => {
              return(
                <Checkbox value={option.value}>{option.label}</Checkbox>
              )
            })}
          </Checkbox.Group>
        )
      case 'start':
        return (
          options.map((option) => {
            return (
              <div style={{ display: 'flex' }}>
                <Rate style={{ fontSize: '12px'}} disabled defaultValue={option}/>
                <span style={{ marginLeft: '8px' }}>{` Từ ${option} sao`}</span>
              </div>
            )
          })
        )
      default:
        return {}
    }
  }

  return (
    <div>
      <WrapperLabelText>Label</WrapperLabelText>
      <WrapperContent>
        {renderContent('text', ['Tu lanh', 'TV', 'May giat'])}
      </WrapperContent>
      <WrapperContent>
        {renderContent('checkbox', [
          {value: 'a', label: 'A'},
          {value: 'b', label: 'B'},
          {value: 'c', label: 'C'}
        ])}
      </WrapperContent>
      <WrapperContent>
        {renderContent('start', [ 5, 4, 3])}
      </WrapperContent>
    </div>
  )
}

export default NavbarComponent
