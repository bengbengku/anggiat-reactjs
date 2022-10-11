import React from 'react'

const Redux = () => {
  return (
    <div
      style={{
        padding: '2rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <button style={{ width: '50px' }}>-</button>{' '}
      <span style={{ padding: '0 1rem' }}>0</span>{' '}
      <button style={{ width: '50px' }}>+</button>
    </div>
  )
}

export default Redux
