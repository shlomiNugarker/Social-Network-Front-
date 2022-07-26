import './assets/scss/global.scss'
// import { Redirect } from 'react-router-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home'
import { Main } from './pages/Main'
import { About } from './pages/About'
import { Signup } from './pages/Signup'
import { getLoggedinUser } from '../src/store/actions/userActions'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLoggedinUser())
  }, [dispatch])

  return (
    <Router>
      <div className="app">
        {/* <div className="temp-div">
          <Link to="/home">Home</Link>|-<Link to="/signup">signup</Link>|-
          <Link to="/about">About</Link>|-<Link to="/main/feed">feed</Link>|-
          <Link to="/main/mynetwork">my-network</Link>|-
          <Link to="/main/jobs">jobs</Link>|-
          <Link to="/main/connections">connections</Link>|-
        </div> */}
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
