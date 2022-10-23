import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import watchlistReducer from "./watchlistReducer";

const reducers = combineReducers({
	movie: movieReducer,
	watchlist: watchlistReducer,
});

export default reducers;
