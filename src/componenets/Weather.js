import React, { useContext } from "react";
import { StateContext } from "../context/searchContext";

const Weather = () => {
	const { state } = useContext(StateContext);
	const { data, isLoading, icon } = state;

	if (!isLoading && !Object.keys(data).length) return null;

	return (
		<div>
			<div>
				<img
					alt="/"
					src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
				></img>
			</div>
			<div>
				Current Temp: {data.temp} F<sup>o</sup>
			</div>
			<div>
				Feels Like: {data.feels_like} F<sup>o</sup>
			</div>
			<div>
				Max Temp: {data.temp_max} F<sup>o</sup>
			</div>
			<div>
				Min Temp: {data.temp_min} F<sup>o</sup>
			</div>
			<div>Humidity: {data.humidity} %</div>
			<div>Pressure: {data.temp} in</div>
		</div>
	);
};

export default Weather;
