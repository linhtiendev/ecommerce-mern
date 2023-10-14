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
import { useNavigate } from 'react-router-dom'

import * as UserService from '../../services/UserService'
import { useMutationHook } from '../../hooks/useMutationHook'
import Loading from '../../components/LoadingComponent/Loading'

const SignUpPage = () => {
  const [ isShowPassword, setIsShowPassword] = useState(false)
  const [ isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
  const [ email, setEmail] = useState('')
  const [ password, setPassword] = useState('')
  const [ confirmPassword, setConfirmPassword] = useState('')
  
  const mutation = useMutationHook(
    data => UserService.createUser(data)
  )
  const { data, isLoading } = mutation
  console.log("mutation", mutation);

  const handleOnChangeEmail = (value) => {
    setEmail(value)
  }
  const handleOnChangePassword = (value) => {
    setPassword(value)
  }
  const handleOnChangeConfirmPassword = (value) => {
    setConfirmPassword(value)
  }

  const handleSignUp = () => {
    mutation.mutate({
      email,
      password,
      confirmPassword
    })
    console.log("sign-up", email, password, confirmPassword);
  }

  const navigate = useNavigate()
  const handleNavigateSignIn = () => {
    navigate('/sign-in')
  }

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
            <InputForm  
              style={{ marginBottom: '10px' }} 
              placeholder="Nhập Email"
              value={email}
              onChange={handleOnChangeEmail}
              />
            <div style={{ position: 'relative' }}>
              <span
                onClick={() => setIsShowPassword(!isShowPassword)} 
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
                  value={password}
                  onChange={handleOnChangePassword}
                />
            </div>
            <div style={{ position: 'relative' }}>
              <span
                onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)} 
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
                value={confirmPassword}
                onChange={handleOnChangeConfirmPassword}
              />
            </div>
            {/* check status data */}
            {data?.status === "ERR" && <span style={{ color: 'red' }}>{data?.message}</span>}
            <Loading isLoading={isLoading}>
              <ButtonComponent
                disabled={!email.length || !password.length || !confirmPassword.length}
                onClick={handleSignUp}
                textButton='Đăng Ký'
                type='outline'
                styleButton={{
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
            </Loading>
            <p>Bạn đã có tài khoản? <WrapperTextBlue onClick={handleNavigateSignIn}> Đăng nhập</WrapperTextBlue></p>
          </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignUpPage
