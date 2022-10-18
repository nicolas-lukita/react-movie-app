import './App.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';
import { useEffect, useState } from 'react';
import { fetchMovies } from './state/actions';

// const API_KEY = "1548126cc4af677d68cab0d2f2c9d77e";
// const BASE_URL = "https://api.themoviedb.org/3/discover/movie";
// const api = axios.create({
// 	baseURL: BASE_URL,
// });
// const getMovies = async () => {
// 	const { data } = await api.get(
// 		`/?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
// 	);
// 	console.log(data.results);
// 	return data;
// };

function App() {
  const dispatch = useDispatch();
  // const { fetchMovies } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    dispatch(fetchMovies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { movies, isLoading } = useSelector((state) => state.movie);
  console.log(movies);

  return isLoading ? (
    <h1>NOT LOADED YET</h1>
  ) : (
    <div className='App'>
      {movies.map((element) => (
        <h1 key={element.id}>{element.title}</h1>
      ))}
    </div>
  );
}

export default App;
