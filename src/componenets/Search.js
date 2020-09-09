import React, { useContext } from "react";
import { getLocationData } from "../utils/utils";
import { StateContext } from "../context/searchContext";

const Search = () => {
	const { state, dispatch } = useContext(StateContext);
	const { search } = state;

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await getLocationData(search);
			dispatch({ type: "SET_ICON", payload: res.data.weather[0].icon });
			dispatch({ type: "SET_LOADING", payload: false });
			dispatch({ type: "SET_DATA", payload: res.data.main });
		} catch (err) {
			console.log("err ******------>>>>>>", err);
		}
	};

	return (
		<div className="search-container">
			<header className="Search-header">
				<p>Search</p>
			</header>
			<div className="search-content">
				<input
					value={search}
					type="text"
					onChange={(e) =>
						dispatch({ type: "SET_SEARCH", payload: e.target.value })
					}
				></input>
				<button onClick={(e) => handleSubmit(e)}>Search</button>
			</div>
		</div>
	);
};

export default Search;
