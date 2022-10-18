const movieReducer = (state = [], action) => {
	switch (action.type) {
		case "FETCH-ALL":
			return action.payload;
		default:
			return state;
	}
};

export default movieReducer;
