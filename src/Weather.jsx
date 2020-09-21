import React, { Component } from "react";
import Form from "./Form";
import WeatherData from "./WeatherData";
class Weather extends Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const Api_Key = 'af8bf8fa4f83881476d75738336d5547';
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);

        const response = await api_call.json();

        console.log(response);

        if (city && country) {
            this.setState({
                temperature: response.main.temp,
                city: response.name,
                country: response.sys.country,
                humidity: response.main.humidity,
                description: response.weather[0].description,
                error: ""
            })
        } else {
            this.setState({
                error: "Please enter the values..."
            })

        }
    }

    render() {
        return (
            <div>
                <h2>Weather Report</h2>
                <div className="ui divider"></div>
                <div>
                    <Form loadWeather={this.getWeather} />
                    <div className="ui divider"></div>
                    <WeatherData
                        temperature={this.state.temperature}
                        city={this.state.city}
                        country={this.state.country}
                        humidity={this.state.humidity}
                        description={this.state.description}
                        error={this.state.error} />
                </div>
            </div>
        );
    }
}

export default Weather;