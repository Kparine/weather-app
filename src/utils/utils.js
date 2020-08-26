import axios from "axios";

export const getLocationData = async (search) => {
	try {
		if (!search) return null;

		const res = await axios.get(
			`https://maps.googleapis.com/maps/api/geocode/json?address=${search}&key=${process.env.REACT_APP_GOOGLE_KEY}`
		);
		const location = res.data.results[0].geometry.location;

		const weatherRes = await getWeatherData(location);
		return weatherRes;
	} catch (err) {
		console.log("err ******------>>>>>>", err);
	}
};

const getWeatherData = async (location) => {
	try {
		if (!location) return null;

		const lat = location["lat"];
		const lon = location["lng"];
		const res = await axios.get(
			`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
		);
		return res;
	} catch (err) {
		console.log("err ******------>>>>>>", err);
	}
};
