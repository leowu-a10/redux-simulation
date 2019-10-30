import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ReduxDemo from './container/ReduxDemo'
import { reducers } from './reducer'

const store = createStore((state: any, action) => {
  return reducers(state, action)
}, {})

export default function() {
  return (
    <Provider store={store}>
      <ReduxDemo />
    </Provider>
  )
}
