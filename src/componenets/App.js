import React from "react";
import "../App.css";
import Search from "../componenets/Search";
import Weather from "../componenets/Weather";
import Header from "../componenets/Header";

import StateContextProvider from "../context/searchContext";

const App = () => {
	return (
		<div className="App">
			<StateContextProvider>
				<div className="header-wrapper">
					<Header />
					<div className="location-wrapper">
						<Search />
						<Weather />
					</div>
				</div>
			</StateContextProvider>
		</div>
	);
};

export default App;
