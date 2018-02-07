import React from 'react'

class Child extends React.Components {
  render() {
    return (
      <div>
        <h3>ID: {this.props.match.params.id}</h3>
      </div>
    )
  }
}

export default Child
