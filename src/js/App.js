import '../scss/App.scss'
import React from 'react'
import Main from './pages/main'
import Slider from './pages/slider'
import  {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/main' component={Main} />
            <Route path='/slider' component={Slider} />
            <Redirect from='/' to='/main'/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
