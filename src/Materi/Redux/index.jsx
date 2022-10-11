import React from 'react'
import { Provider } from 'react-redux'
import store from '../../app/store'
import CounterRedux from './pembahasan/CounterRedux'

const Redux = () => {
  return (
    <Provider store={store}>
      <CounterRedux />
    </Provider>
  )
}

export default Redux
