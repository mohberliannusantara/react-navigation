import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Child from './Child'

class ParamExample extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <h2>Accounts</h2>
          <ul>
            <li><Link to={`${this.props.match.url}/netflix`}>Netflix</Link></li>
            <li><Link to={`${this.props.match.url}/zillow-group`}>Zillow Group</Link></li>
            <li><Link to={`${this.props.match.url}/yaho`}>Yahoo</Link></li>
            <li><Link to={`${this.props.match.url}/modus-create`}>Modus Create</Link></li>
          </ul>

          <Route path={`${this.props.match.url}/:id`} component={Child}/>
        </div>
      </Router>
    )
  }
}

export default ParamExample
