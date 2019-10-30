import React, { useContext } from 'react'
import HooksContext from '../HooksContext'

const InputGroup = ({ fieldName }: { fieldName: string }) => {
  const {
    [fieldName.toLowerCase()]: { focus, ...formInput },
  }: { [index: string]: any } = useContext(HooksContext)

  return (
    <div>
      <label>{fieldName}:</label>
      <input type="text" autoComplete="off" {...formInput} />
    </div>
  )
}

export default InputGroup
