import './App.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';
import { useEffect, useState } from 'react';
import { fetchMovies } from './state/actions';

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
