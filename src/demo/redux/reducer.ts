import { combineReducers } from 'redux'

const INITIAL_STATE = {
  name: '',
  address: '',
}

const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.payload }

    case 'UPDATE_ADDRESS':
      return { ...state, address: action.payload }
    default:
      return state
  }
}

export const reducers = combineReducers({
  demo: reducer,
})
