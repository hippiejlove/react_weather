import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{
  constructor(props){
    super(props);

    // this.convertKToF = this.convertKToF.bind(this);
    this.renderWeather = this.renderWeather.bind(this);     // Needed to access K To F conversion
  }
  convertKToF(temp){
    return 1.8 * (temp - 273) + 32;
  }
  renderWeather(cityData){                  // Render each city data as a new row
    console.log('City Data: ', cityData);
    const name = cityData.city.name;        // Store name
    // const lon = cityData.city.coord.lon;    // Longitude
    // const lat = cityData.city.coord.lat;    // Latitude
    const { lon, lat } = cityData.city.coord;  // Get the two points in the given order 

    // Collect data
    const temps = cityData.list.map(weather => this.convertKToF(weather.main.temp));   // Collect temperature
    console.log('Temperature array: ', temps);
    const press = cityData.list.map(weather => weather.main.pressure );
    const humis = cityData.list.map(weather => weather.main.humidity );
    // return (
    //   <tr key={name}>
    //     <td>{name}</td>
    //     <td>
    //       <Sparklines height={120} width={180} data={temps}>
    //         <SparklinesLine color="red" />
    //       </Sparklines>
    //     </td>
    //     <td>
    //       <Sparklines height={120} width={180} data={press}>
    //         <SparklinesLine color="blue" />
    //       </Sparklines>
    //     </td>
    //     <td>
    //       <Sparklines height={120} width={180} data={humis}>
    //         <SparklinesLine color="green" />
    //       </Sparklines>
    //     </td>
    //   </tr>
    // );
    return (
      <tr key={name}>
        <td><GoogleMap lat={lat} lon={lon} /><div>{name}</div></td>
        <td>
          <Chart data={temps} color="red" units="F" />
        </td>
        <td>
          <Chart data={press} color="blue" units="hPa" />
        </td>
        <td>
          <Chart data={humis} color="green" units="%" />
        </td>
      </tr>
    );
  }

  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature(F)</th>
            <th>Pressure(HPa)</th>
            <th>Humidity(%)</th>
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
