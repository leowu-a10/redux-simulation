import React from 'react'
import FormWrapper from './FormWrapper'
import { useFormInput } from '../customHooks'
import HooksContext from '../HooksContext'

const HooksDemo = () => {
  const name = useFormInput('')
  const address = useFormInput('')
  const sharedContext = { name, address }

  return (
    <HooksContext.Provider value={sharedContext}>
      <div className="demo">
        <b>Hooks:</b>
        <FormWrapper />
        <button
          onClick={() =>
            alert(`name: ${name.value}, address: ${address.value}`)
          }
        >
          Get Data
        </button>
      </div>
    </HooksContext.Provider>
  )
}

export default HooksDemo
