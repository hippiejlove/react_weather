import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component{
  renderWeather(cityData){                  // Render each city data as a new row
    console.log('City Data: ', cityData);
    const name = cityData.city.name;        // Store name
    return (
      <tr key={name}>
        <td>{name}</td>
      </tr>
    );
  }

  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps( { weather } ){      // get the weather field from the incoming state object
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
