import React from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import Results from '../Results/Results';
import fetchIpData from '../../utils/api';
import './App.css';

class App extends React.Component {
  state = {};

  handleUserSubmit = userInput => {
    return fetchIpData(userInput)
      .then(data => this.setState({ data }))
      .catch();
  };

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <div className="container">
          <Header />
          <SearchBox handleUserSubmit={this.handleUserSubmit} />
          <Results data={data} />
        </div>
      </div>
    );
  }
}

export default App;
