import React from 'react';
class WeatherData extends React.Component{
  render(){
    return(
      <div>
        {this.props.country && this.props.city && <h3>Location: {this.props.city}, {this.props.country}</h3> }
        {this.props.temperature && <h3>Temperature: {(this.props.temperature -273.15).toFixed(2)} ° Celsius</h3>}
        {this.props.humidity && <h3>Humidity: {this.props.humidity}</h3>}
        {this.props.description && <h3>Conditions:  {this.props.description}</h3>}
        {this.props.error && <h3>{this.props.error}</h3>}
      </div>
    )
  }
}
export default WeatherData;