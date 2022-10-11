import * as counter from './constants'

export const increment = (payload) => {
  return {
    type: counter.INCREMENT,
    payload: payload,
  }
}
export const decrement = (payload) => {
  return {
    type: counter.DECREMENT,
    payload: payload,
  }
}

export const decrementWithCheck = (payload) => {
  return (dispatch, getState) => {
    if (getState().counter.count > 0) {
      dispatch(decrement(payload))
    }
  }
}
