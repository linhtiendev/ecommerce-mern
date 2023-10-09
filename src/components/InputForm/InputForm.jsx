import React from 'react'
import { WrapperInputStyle } from './style'

const InputForm = ( props ) => {
    const {placeholder = 'input text', ...rests} = props
    const handleOnChangeInput = (e) => {
        props.onChange(e.target.value)
    }
    return (
        <div>
            <WrapperInputStyle 
                placeholder={placeholder} 
                value={props.value}
                {...rests}
                onChange={handleOnChangeInput}
            />
        </div>
    )
}

export default InputForm
