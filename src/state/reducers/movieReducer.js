const initState = {
	movies: [],
};

const movieReducer = (state = initState, action) => {
	switch (action.type) {
		case "FETCH-ALL":
			return { ...state, movies: [...action.payload] };
		default:
			return state;
	}
};

export default movieReducer;
