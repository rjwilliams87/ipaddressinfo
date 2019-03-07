import React from 'react';

class SearchBox extends React.Component {
  state = {
    userInput: null
  };

  handleInputChange = event => {
    this.setState({
      userInput: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { userInput } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <legend>Enter IP Address</legend>
          <input
            type="text"
            placeholder="enter domain name or ip address"
            value={userInput}
            onChange={this.handleInputChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBox;
