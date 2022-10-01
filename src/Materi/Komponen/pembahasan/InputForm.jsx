import React from 'react'

const InputForm = ({ placeholder, setNama }) => {
  return (
    <>
      <input
        placeholder={placeholder}
        onChange={(e) => setNama(e.target.value)}
      />
    </>
  )
}

export default InputForm
