import React from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import Results from '../Results/Results';
import './App.css';

const url = 'https://qwo6ei9p45.execute-api.us-east-1.amazonaws.com/dev/';

class App extends React.Component {
  state = {};

  handleUserSubmit = userInput => {
    return this.fetchIpData(userInput)
      .then(data => this.setState({ data }))
      .catch();
  };

  fetchIpData = userInput => {
    return fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: userInput
    }).then(res => res.json());
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
