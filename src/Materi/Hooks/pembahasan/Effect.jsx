import React, { useEffect, useState } from 'react'

const Effect = ({ setText, text, seconds }) => {
  return (
    <div
      style={{
        padding: '2rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <textarea
        cols='30'
        rows='10'
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <p>
        Waktu: {Math.floor(seconds / 60)} Menit {seconds % 60} Detik
      </p>
    </div>
  )
}

export default Effect
