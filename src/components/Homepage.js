/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useEffect, useState } from "react";
import { fetchMovies } from "../state/actions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Homepage = () => {
	const dispatch = useDispatch();
	const [searchText, setSearchText] = useState("");

	useEffect(() => {
		dispatch(fetchMovies());
	}, []);

	const state = useSelector((state) => state.movie.movies);

	const searchHandler = (e) => {
		const lowerCase = e.target.value.toLowerCase();
		setSearchText(lowerCase);
	};

	const filteredMovies = state.filter((movie) => {
		if (movie === "") {
			return movie;
		} else {
			return movie.title.toLowerCase().includes(searchText);
		}
	});
	return (
		<div className="App">
			<input
				type="text"
				placeholder="Search movie title..."
				onChange={searchHandler}
			/>
			{!state ? (
				<h1>NOT LOADED YET</h1>
			) : (
				<div>
					{filteredMovies.map((movie) => (
						<div key={movie.id}>
							<Link to={`/movie/${movie.id}`}>
								<img
									src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
									alt={movie.title}
								/>
								<h1>{movie.title}</h1>
							</Link>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Homepage;
