// eslint-disable-next-line no-unused-vars
// @ts-check

import React, { createContext, useReducer, useMemo } from "react";

export const StateContext = createContext({});

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_LOADING": {
			return {
				...state,
				isLoading: action.payload,
			};
		}
		case "SET_DATA": {
			return {
				...state,
				data: action.payload,
			};
		}
		case "SET_ICON": {
			return {
				...state,
				icon: action.payload,
			};
		}
		case "SET_SEARCH": {
			return {
				...state,
				search: action.payload,
			};
		}
		default:
			throw new Error();
	}
};

const initialState = {
	isLoading: false,
	data: {},
	search: "",
	icon: "",
};

const StateContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const contextValue = useMemo(
		() => ({
			state,
			dispatch,
		}),
		[state, dispatch]
	);

	return (
		<StateContext.Provider value={contextValue}>
			{children}
		</StateContext.Provider>
	);
};
export default StateContextProvider;
