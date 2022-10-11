import React, { useEffect, useState } from 'react'
import { useToggle } from './pembahasan/hook/useToggle'
// import Counter from './pembahasan/Counter'
// import Effect from './pembahasan/Effect'
import Identity from './pembahasan/Identity'

const Hooks = () => {
  //   const [text, setText] = useState('')
  //   const [seconds, setSeconds] = useState(0)
  //   useEffect(() => {
  //     console.log('object')
  //     setInterval(() => {
  //       setSeconds((s) => s + 1)
  //     }, 1000)
  //   }, [])
  const [label, setLabel] = useState('On')
  const [lampu, setLampu] = useToggle()

  const style = {
    background: lampu ? 'yellow' : '#000',
    color: '#fff',
    textAlign: 'center',
    height: '400px',
    width: '100%',
  }

  const saklarHandler = () => {
    setLampu(!lampu)
    setLabel((e) => {
      if (e === 'On') {
        return 'Off'
      }
      return 'On'
    })
  }

  return (
    <div style={style}>
      {/* <Effect text={text} setText={setText} seconds={seconds} /> */}
      <button onClick={saklarHandler}> {label} </button>
      {/* <Identity /> */}
    </div>
  )
}

export default Hooks
