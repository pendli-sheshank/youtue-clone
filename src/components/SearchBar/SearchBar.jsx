import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    input: "",
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.input);
    console.log("clicked");
  };

  searchInput = (event) => {
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <>
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Search here.."
              value={this.state.input}
              onChange={this.searchInput}
              type="text"
            />
          </div>
        </form>
      </>
    );
  }
}
