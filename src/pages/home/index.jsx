import React from 'react'
import Canvas from '../../components/canvas'
import Header from '../../components/header/Header'
import './style.css'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Canvas />
    </div>
  )
}

export default Home
