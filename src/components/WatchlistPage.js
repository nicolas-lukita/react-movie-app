import React from "react";
import { useSelector } from "react-redux";

const WatchlistPage = () => {
	const watchlistIds = useSelector((state) => state.watchlist.watchId);
	const movieData = useSelector((state) => state.movie.movies);
	let watchlistMovies = [];
	movieData.forEach((movie) => {
		if (watchlistIds.has(movie.id)) watchlistMovies.push(movie);
	});
	console.log(watchlistMovies);
	return (
		<div>
			{watchlistMovies.map((movie) => (
				<>
					<h1 key={movie.id}>{movie.title}</h1>
				</>
			))}
		</div>
	);
};

export default WatchlistPage;
