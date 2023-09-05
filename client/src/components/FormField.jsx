import React from 'react'

export const FormField = ({labelName, type, name, placeholder, value,
handleChange, isRandomPrompt, handleRandomPrompt}) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label htmlFor={name}>
          {labelName}
        </label>
          {isRandomPrompt && (
            <button type='button'
            onClick={handleRandomPrompt}
            >
              laissons le sort décider
            </button>
          )}
      </div>
      <input 
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  )
}
