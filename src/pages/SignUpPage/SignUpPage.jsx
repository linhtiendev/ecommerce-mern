import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextBlue } from './style'
import { Image } from 'antd'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import imgLogin from '../../assets/images/imgtitle/login-bg.png'
import {
  EyeFilled,
  EyeInvisibleFilled
} from '@ant-design/icons';

const SignUpPage = () => {
  const [ isShowPassword, setIsShowPassword] = useState(false)
  const [ isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      background: '#efefef', 
      height: '100vh',
    }}>
      <div 
        style={{ 
          width: '800px', 
          height: '440px', 
          borderRadius: '10px', 
          background: '#fff', 
          boxShadow: '2px 2px 2px 2px #dbcfcf',
          display: 'flex',
          padding: '20px',
          gap: '20px'
        }}>
          <WrapperContainerLeft>
              <Image src={imgLogin} alt='img logo' preview={false} style={{ width: '250px', height: '270px', padding: '20px'}}/>
          </WrapperContainerLeft>
          <WrapperContainerRight>
            <div 
              style={{ fontSize: '28px', fontWeight: '700', color: '#00483d' }}
            >
              LITISTORE XIN CHÀO 
            </div>
            <p style={{ marginBottom: '50px' }}>Đăng ký tài khoản</p>
            <InputForm  style={{ marginBottom: '10px' }} placeholder="Nhập Email"/>
            <div style={{ position: 'relative' }}>
              <span 
                style={{
                  zIndex: '10',
                  position: 'absolute',
                  top: '11px',
                  right: '8px'
                }}>
                  {
                    isShowPassword 
                      ? (<EyeFilled />) 
                      : (<EyeInvisibleFilled />) 
                  }
              </span>
              <InputForm 
                placeholder="Nhập mật khẩu" 
                  type={ isShowPassword ? 'text' : 'password' } 
                  style={{ marginBottom: '10px' }}
                />
            </div>
            <div style={{ position: 'relative' }}>
              <span 
                style={{
                  zIndex: '10',
                  position: 'absolute',
                  top: '11px',
                  right: '8px'
                }}>
                  {
                    isShowConfirmPassword 
                      ? (<EyeFilled />) 
                      : (<EyeInvisibleFilled />) 
                  }
              </span>
              <InputForm 
                placeholder="Nhập lại mật khẩu" 
                type={ isShowConfirmPassword ? 'text' : 'password' } 
              />
            </div>
            <ButtonComponent 
              textButton='Đăng Ký'
              type='outline'
              styleButton={{
                border: '1px solid #00483d',
                fontSize: '16px',
                fontWeight: '500',
                corlor: '#00483d',
                margin: '40px 0 10px',
                width: '100%', height: '40px',
                boxShadow: '2px 2px 2px gray',
                backgroundColor: '#00483d'
              }}
              styleTextButton={{ color: 'white' }}
            />
            {/* <p><WrapperTextBlue>Quên mật khẩu?</WrapperTextBlue></p> */}
            <p>Bạn đã có tài khoản? <WrapperTextBlue> Đăng nhập</WrapperTextBlue></p>
          </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignUpPage
