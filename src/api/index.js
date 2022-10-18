import axios from "axios";

const API_KEY = "1548126cc4af677d68cab0d2f2c9d77e";

const BASE_URL = "https://api.themoviedb.org/3/discover/movie";

const api = axios.create({
	baseURL: BASE_URL,
});

export const getMovies = async () =>
	api.get(
		`/?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate`
	);
