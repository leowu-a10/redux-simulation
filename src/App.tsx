import React from 'react'
import './App.css'
import HooksDemo from './demo/hooks'
import ReduxDemo from './demo/redux'

const App: React.FC = () => {
  return (
    <div>
      <HooksDemo />
      <hr />
      <ReduxDemo />
    </div>
  )
}

export default App
