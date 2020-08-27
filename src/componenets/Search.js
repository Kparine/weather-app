import React, { useContext } from "react";
import { getLocationData } from "../utils/utils";
import { SearchContext } from "../context/searchContext";

const Search = () => {
	const { setData, setDataDisplayed, search, setSearch, setIcon } = useContext(
		SearchContext
	);

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const handleSubmit = async () => {
		try {
			const res = await getLocationData(search);
			setIcon(res.data.weather[0].icon);
			setDataDisplayed(true);
			setData(res.data.main);
		} catch (err) {
			console.log("err ******------>>>>>>", err);
		}
	};

	return (
		<div className="Search">
			<header className="Search-header">
				<p>Search</p>
				<input
					value={search}
					type="text"
					onChange={(e) => handleChange(e)}
				></input>
				<button onClick={handleSubmit}>Search</button>
			</header>
		</div>
	);
};

export default Search;
