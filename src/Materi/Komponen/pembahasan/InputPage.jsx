import React, { useState } from 'react'
import InputForm from './InputForm'

const InputPage = ({ placeholder }) => {
  const [nama, setNama] = useState('')
  return (
    <div>
      <h4>Tambahan input</h4>
      <InputForm placeholder={placeholder} setNama={setNama} />
      <h3>Nama saya, {!nama ? '(nama)' : nama}</h3>
    </div>
  )
}

export default InputPage
