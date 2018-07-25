import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';

class WeatherList extends Component{
  renderWeather(cityData){                  // Render each city data as a new row
    console.log('City Data: ', cityData);
    const name = cityData.city.name;        // Store name

    // Collect data
    const temps = cityData.list.map(weather => weather.main.temp);   // Collect temperature
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
        <td>{name}</td>
        <td>
          <Chart data={temps} color="red" />
        </td>
        <td>
          <Chart data={press} color="blue" />
        </td>
        <td>
          <Chart data={humis} color="green" />
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
