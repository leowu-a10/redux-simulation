import React from 'react'
import InputGroup from '../container/InputGroup'

const FormWrapper = () => {
  return (
    <form autoComplete="new-password">
      <InputGroup fieldName="Name" />
      <InputGroup fieldName="Address" />
    </form>
  )
}

export default FormWrapper
