import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addWatchlist, removeWatchlist } from "../state/actions";

const DetailsPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const watchList = useSelector((state) => state.watchlist.watchId);
	const movieData = useSelector((state) => state.movie.movies).find((movie) => {
		//console.log(movie.id == id);
		return movie.id == id;
	});

	return (
		<div>
			<img
				src={"https://image.tmdb.org/t/p/w500" + movieData.backdrop_path}
				alt={movieData.title + "backdrop"}
			/>
			{/* <img
				src={"https://image.tmdb.org/t/p/w500" + movieData.poster_path}
				alt={movieData.title}
			/> */}

			<button
				onClick={
					watchList.has(movieData.id)
						? () => dispatch(removeWatchlist(movieData.id))
						: () => dispatch(addWatchlist(movieData.id))
				}
			>
				{watchList.has(movieData.id)
					? "Remove from Watchlist"
					: "Add to Watchlist"}
			</button>
			<h3>WATCHLIST MOVIES = {watchList}</h3>
			<h2>{movieData.title}</h2>
			<h2>{movieData.overview}</h2>
		</div>
	);
};

export default DetailsPage;
