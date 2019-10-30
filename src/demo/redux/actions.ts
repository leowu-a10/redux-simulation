export const updateName = (name: string) => {
  return {
    type: 'UPDATE_NAME',
    payload: name,
  }
}

export const updateAddress = (address: string) => {
  return {
    type: 'UPDATE_ADDRESS',
    payload: address,
  }
}
