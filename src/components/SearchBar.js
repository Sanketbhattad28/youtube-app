import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment" style={{ marginTop: "10px" }}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <input
              className="search_bar"
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder="Search"
            />
          </div>
          <button className="search_button">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
