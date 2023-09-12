import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'

// Hien thi header va cac component con
const DefaultComponent = ({children}) => {
  return (
    <div>
      <HeaderComponent />
      {/* hiển thị những children mong muốn */}
      {children}
    </div>
  )
}

export default DefaultComponent
