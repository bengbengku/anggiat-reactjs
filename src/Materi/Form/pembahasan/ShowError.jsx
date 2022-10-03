import React from 'react'

const ShowError = ({ errors }) => {
  return (
    <ul style={{ color: 'red', listStyleType: 'none' }}>
      {errors.map((err, i) => (
        <li key={i}>{err}</li>
      ))}
    </ul>
  )
}

export default ShowError
