import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    input: "",
  };

  onFormSubmit = (e) => {
    e.preventDefault();
  };

  searchInput = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { input } = this.state;
    return (
      <>
        <from onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Search here.."
              type="text"
              value={input}
              onChange={this.searchInput}
            />
          </div>
        </from>
      </>
    );
  }
}
