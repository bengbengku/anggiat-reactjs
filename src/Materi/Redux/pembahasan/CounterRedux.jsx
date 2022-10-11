import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  decrementWithCheck,
  increment,
} from '../../../app/features/Counter/actions'

const CounterRedux = () => {
  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  // const handlerDecrement = () => {
  //   if (count <= 0) {
  //     return
  //   }
  //   dispatch(decrement(1))
  // }
  return (
    <div
      style={{
        padding: '2rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <button
        style={{ width: '50px' }}
        onClick={() => dispatch(decrementWithCheck(1))}
      >
        -
      </button>{' '}
      <span style={{ padding: '0 1rem' }}>{count}</span>{' '}
      <button style={{ width: '50px' }} onClick={() => dispatch(increment(1))}>
        +
      </button>
    </div>
  )
}

export default CounterRedux
