import React from 'react'
import ClassComponent from './pembahasan/ClassComponent'
import FunctionalComponent from './pembahasan/FunctionalComponent'

class Komponent extends React.Component {
  render() {
    return (
      <>
        <ClassComponent nama='Anggiat Benget' />
        <FunctionalComponent nama='Napitupulu' />
      </>
    )
  }
}

export default Komponent
