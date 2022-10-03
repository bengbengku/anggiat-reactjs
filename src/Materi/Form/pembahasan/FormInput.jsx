import React from 'react'

const FormInput = ({ label, type, name, onChange, value }) => {
  return (
    <div style={{ margin: '5px 0', width: '100%' }}>
      <label>{label}</label>
      <br />
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ width: '100%' }}
      />
      <br />
    </div>
  )
}

export default FormInput
