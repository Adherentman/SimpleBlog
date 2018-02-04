import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './css/App.css';
import { Url } from './env';
import Posts from './components/posts/Posts';
import DashBoard from './components/dashboard/DashBoard';
import LifeTrip from './components/lifetrip/LifeTrip';
import AboutMe from './components/about/AboutMe';
import Home from './components/Home';

class App extends Component {
  render() {
    const muiTheme = getMuiTheme({
      appBar: {
        color: '#2196f3',
      },
    });

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
        <Router>
          <div>
            <Switch>
              <Route exact path={Url('_dashboard')} component={DashBoard} />
              <Route exact path={Url('_posts')} component={Posts} />
              <Route path={Url('_flight')} component={LifeTrip} />
              <Route path={Url('_me')} component={AboutMe} />
              <Route component={Home} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
