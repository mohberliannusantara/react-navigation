import React from 'react'

class Topic extends React.Component {
  render () {
    console.log(this.props);
    return (
      <div>
        <h3>{this.props.match.params.topicId}</h3>
      </div>
    )
  }
}

export default Topic
