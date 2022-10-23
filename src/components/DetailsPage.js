import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const DetailsPage = () => {
	const { id } = useParams();

	const movieData = useSelector((state) => state.movie.movies).find((movie) => {
		console.log(movie.id == id);
		return movie.id == id;
	});
	console.log(movieData);

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

			<h2>{movieData.title}</h2>
			<h2>{movieData.overview}</h2>
		</div>
	);
};

export default DetailsPage;
