import * as api from "../../api";

export const fetchMovies = () => async (dispatch, getState) => {
	try {
		const { data } = await api.getMovies();
		//console.log(data);
		dispatch({
			type: "FETCH-ALL",
			payload: data.results,
		});
	} catch (err) {
		console.log(err.message);
	}
};

export const addWatchlist = (movieId) => {
	return {
		type: "ADD-WATCHLIST",
		payload: movieId,
	};
};

export const removeWatchlist = (movieId) => {
	return {
		type: "REMOVE-WATCHLIST",
		payload: movieId,
	};
};
