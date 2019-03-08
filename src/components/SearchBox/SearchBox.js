import React from 'react';
import './SearchBox.css';

class SearchBox extends React.Component {
  state = {
    userInput: ''
  };

  handleInputChange = event => {
    this.setState({
      userInput: event.target.value
    });
  };

  // TODO: clear input value after submit

  handleSubmit = event => {
    event.preventDefault();
    const { handleUserSubmit } = this.props;
    const { userInput } = this.state;
    if (userInput === '') {
      this.setState({
        error: 'please enter valid IP or domain name'
      });
    } else {
      handleUserSubmit(userInput);
      this.setState({ error: null });
    }
  };

  render() {
    const { userInput, error } = this.state;
    return (
      <div>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <div className="search-form__top">
            <legend className="search-form__legend">
              {error || 'enter IP address or domain name'}
            </legend>
          </div>
          <div className="flex-column">
            <input
              className="search-form__input"
              type="text"
              placeholder="domain or ip here"
              value={userInput}
              onChange={this.handleInputChange}
            />
            <button type="submit" className="search-form__btn">
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBox;
