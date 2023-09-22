import React, { useState } from 'react'
import { WrapperInputStyle } from './style'

const InputForm = ( props ) => {
    const [valueInput, setValueInput] = useState('')
    const {placeholder = 'input text', ...rests} = props

    return (
        <div>
            <WrapperInputStyle 
                placeholder={placeholder} 
                valueInput={valueInput}
                {...rests}
            />
        </div>
    )
}

export default InputForm
