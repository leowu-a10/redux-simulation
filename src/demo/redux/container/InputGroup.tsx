import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateAddress, updateName } from '../actions'

interface InputGroupProps {
  fieldName: string
  name: string
  address: string
  updateName: (name: string) => { type: string; payload: string }
  updateAddress: (address: string) => { type: string; payload: string }
}

class InputGroup extends Component<InputGroupProps> {
  state = { focus: false }

  render() {
    const { fieldName, name, address } = this.props

    return (
      <div>
        <label>{fieldName}:</label>
        <input
          type="text"
          value={fieldName.toLowerCase() === 'name' ? name : address}
          onChange={e => {
            if (fieldName.toLowerCase() === 'name') {
              this.props.updateName(e.target.value)
            } else {
              this.props.updateAddress(e.target.value)
            }
          }}
          onFocus={() => this.setState({ focus: true })}
          onBlur={() => this.setState({ focus: false })}
          autoComplete="off"
        />
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    name: state.demo.name,
    address: state.demo.address,
  }
}

const mapDispatchToProps = {
  updateAddress,
  updateName,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputGroup)
