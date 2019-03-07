import React from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';

const url = 'https://qwo6ei9p45.execute-api.us-east-1.amazonaws.com/dev/';

class App extends React.Component {
  state = {};

  handleUserSubmit = userInput => {
    return this.fetchIpData(userInput)
      .then(data => this.setState({ data }))
      .catch(error => this.setState({ error }));
  };

  fetchIpData = userInput => {
    return fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: userInput
    }).then(res => res.json());
  };

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBox handleUserSubmit={this.handleUserSubmit} />
      </div>
    );
  }
}

export default App;
