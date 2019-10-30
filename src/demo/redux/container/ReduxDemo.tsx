import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormWrapper from '../component/FormWrapper'

interface ReduxDemoProps {
  name: string
  address: string
}

class ReduxDemo extends Component<ReduxDemoProps> {
  render() {
    const { name, address } = this.props
    return (
      <div className="demo">
        <b>Redux:</b>
        <FormWrapper />
        <button onClick={() => alert(`name: ${name}, address: ${address}`)}>
          Get Data
        </button>
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

export default connect(mapStateToProps)(ReduxDemo)
