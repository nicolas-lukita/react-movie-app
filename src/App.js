import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import { useEffect, useState } from "react";
import { fetchMovies } from "./state/actions";

function App() {
	const dispatch = useDispatch();
	const { fetchMovies } = bindActionCreators(actionCreators, dispatch);
	const [searchText, setSearchText] = useState("");

	useEffect(() => {
		fetchMovies();
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
						<div>
							<img
								src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
								alt={movie.title}
							></img>
							<h1 key={movie.id}>{movie.title}</h1>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default App;
