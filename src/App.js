import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home';
import TeamsList from './containers/TeamsList';
import NewTeam from './components/NewTeam'
import { connect } from 'react-redux'
import { getTeams } from './redux/actions/teams'

class App extends React.Component {
  componentDidMount() {
    this.props.getTeams();

  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/teams" component={TeamsList} />
          <Route exact path="/teams/new" component={NewTeam} />
        </Router>
      </div>
    )
  };
}

export default connect(
  null, 
    { getTeams }
  )(App);
