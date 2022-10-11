import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div
      style={{
        padding: '2rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <button style={{ width: '50px' }} onClick={() => setCount(count - 1)}>
        -
      </button>{' '}
      <span style={{ padding: '0 1rem' }}>{count}</span>{' '}
      <button style={{ width: '50px' }} onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  )
}

export default Counter
