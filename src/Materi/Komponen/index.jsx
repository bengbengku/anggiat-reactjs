import React from 'react'
import ClassComponent from './pembahasan/ClassComponent'
import FunctionalComponent from './pembahasan/FunctionalComponent'
import InputPage from './pembahasan/InputPage'

class Komponent extends React.Component {
  render() {
    return (
      <>
        <ClassComponent nama='Anggiat Benget' />
        <FunctionalComponent nama='Napitupulu' />
        <InputPage placeholder='Masukan Sebuah Nama' />
      </>
    )
  }
}

export default Komponent
