import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import Routes from 'routes'
import TopBar from 'components/topbar'

const App = () => {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Routes />
      </Router>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
