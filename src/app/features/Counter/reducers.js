import * as counter from './constants'

let initialState = {
  count: 0,
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case counter.INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      }
    case counter.DECREMENT:
      return {
        ...state,
        count: state.count - action.payload,
      }
    default:
      return state
  }
}

export default counterReducer
