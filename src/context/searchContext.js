// eslint-disable-next-line no-unused-vars
// @ts-check

import React, { createContext, useState } from "react";

export const SearchContext = createContext({});

const SearchContextProvider = (props) => {
	const [data, setData] = useState({});
	const [search, setSearch] = useState("");

	const [dataDisplay, setDataDisplayed] = useState(false);

	const SearchDataContext = {
		data,
		setData,
		search,
		setSearch,
		dataDisplay,
		setDataDisplayed,
	};

	console.log("dataDisplay ******------>>>>>>", dataDisplay);

	return (
		<SearchContext.Provider value={SearchDataContext}>
			{props.children}
		</SearchContext.Provider>
	);
};
export default SearchContextProvider;
