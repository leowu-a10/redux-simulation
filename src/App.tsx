import React from 'react'
import './App.css'
// import HooksDemo from './demo/hooks'
// import ReduxDemo from './demo/redux'
// import TodoApp from './demo/todoWithoutRedux'
import LiteTodoApp from './demo/lite'

const App: React.FC = () => {
  return (
    <div>
      {/* <HooksDemo /> */}
      <hr />
      {/* <ReduxDemo /> */}
      <LiteTodoApp />
    </div>
  )
}

export default App
