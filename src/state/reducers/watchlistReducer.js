const initState = {
	watchId: new Set(),
	//watchId: [],
};

const watchlistReducer = (state = initState, action) => {
	switch (action.type) {
		case "ADD-WATCHLIST":
			state.watchId.add(action.payload);
			const addArr = [...state.watchId];
			// newArr.push(action.payload);
			return { ...state, watchId: new Set(addArr) };

		case "REMOVE-WATCHLIST":
			state.watchId.delete(action.payload);
			const remArr = [...state.watchId];
			return { ...state, watchId: new Set(remArr) };
		default:
			return state;
	}
};

export default watchlistReducer;
