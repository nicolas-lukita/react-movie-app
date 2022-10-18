import * as api from "../../api";

export const fetchMovies = () => async (dispatch, getState) => {
	try {
		const { data } = await api.getMovies();
		dispatch({
			type: "FETCH-ALL",
			payload: data,
		});
	} catch (err) {
		console.log(err.message);
	}
};