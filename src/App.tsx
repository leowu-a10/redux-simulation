import React from 'react'
import './App.css'
import HooksDemo from './demo/hooks'
import ReduxDemo from './demo/redux'
import TodoApp from './demo/todoWithoutRedux'

const App: React.FC = () => {
  return (
    <div>
      {/* <HooksDemo /> */}
      <hr />
      {/* <ReduxDemo /> */}
      <TodoApp />
    </div>
  )
}

export default App
