import React from "react";
import "../App.css";
import Search from "../componenets/Search";
import Weather from "../componenets/Weather";
import SearchContextProvider from "../context/searchContext";

const App = () => {
	return (
		<div className="App">
			<SearchContextProvider>
				<div className="header-wrapper">
					<Search />
					<Weather />
					<div className="location-wrapper"></div>
				</div>
			</SearchContextProvider>
		</div>
	);
};

export default App;
