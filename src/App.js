import "./App.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import { useEffect, useState } from "react";
import { fetchMovies } from "./state/actions";

function App() {
	const dispatch = useDispatch();
	const { fetchMovies } = bindActionCreators(actionCreators, dispatch);

	useEffect(() => {
		fetchMovies();
	}, []);

	const state = useSelector((state) => state.movie.results);
	console.log(state);

	return !state ? (
		<h1>NOT LOADED YET</h1>
	) : (
		<div className="App">
			{state.map((movie) => (
				<h1 key={movie.id}>{movie.title}</h1>
			))}
		</div>
	);
}

export default App;
