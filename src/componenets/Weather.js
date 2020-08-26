import React, { useContext } from "react";
import { SearchContext } from "../context/searchContext";

const Weather = () => {
	const { dataDisplay, data } = useContext(SearchContext);

	if (!dataDisplay && !Object.keys(data).length) return null;

	return (
		<div>
			Current Temp: {data.temp} F<sup>o</sup>
		</div>
	);
};

export default Weather;
