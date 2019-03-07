import React from 'react';
import './SearchBox.css';

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
    this.props.handleUserSubmit(this.state.userInput);
  };

  render() {
    const { userInput } = this.state;
    return (
      <div>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <div className="search-form__top">
            <legend className="search-form__legend">
              Enter IP Address or Domain Name
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
