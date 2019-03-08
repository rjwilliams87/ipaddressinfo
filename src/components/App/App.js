import React from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import Results from '../Results/Results';
import fetchIpData from '../../utils/api';
import './App.css';

class App extends React.Component {
  state = {};

  // passed to SearchBox to lift up user input
  // to pass as param for api call
  handleUserSubmit = userInput => {
    return fetchIpData(userInput)
      .then(data => this.setState({ data }))
      .catch(err => console.log(err)); // for dev TODO: setState({err}) && create err msg
  };

  // passed to Header to clear state
  // which refreshes Results section
  clearResults = () => {
    this.setState({ data: undefined });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <div className="container">
          <Header refresh={this.clearResults} />
          <SearchBox handleUserSubmit={this.handleUserSubmit} />
          <Results data={data} />
        </div>
      </div>
    );
  }
}

export default App;
