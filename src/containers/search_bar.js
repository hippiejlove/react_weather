import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';      // Grab our fetch weather function

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};

    this.onInputChange = this.onInputChange.bind(this); //replace existing function with the same function with it bound to "this"
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
      console.log(event.target.value);
      this.setState({term: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();

    // We need to go and fetch our weather
    this.props.fetchWeather(this.state.term);   // fetch weather for given city
    this.setState({term: ''});                  // clear input
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
         />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// Pass in null, as this container doesn't use state, just dispatch
export default connect(null, mapDispatchToProps)(SearchBar);
