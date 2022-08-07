import './assets/scss/global.scss'
// import { Redirect } from 'react-router-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home'
import { Main } from './pages/Main'
import { About } from './pages/About'
import { Signup } from './pages/Signup'
import { getLoggedinUser } from '../src/store/actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLoggedinUser())
    // eslint-disable-next-line
  }, [])

  return (
    <Router>
      <div className="app">
        <div className="temp-div">
          <Link to="/home">Home</Link>|<Link to="/signup">signup</Link>|
          <Link to="/main/feed">feed</Link>|
        </div>
        <main>
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/main" component={Main} />
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App