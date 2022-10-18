import * as api from '../../api';

export const fetchMovies = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const { data } = await api.getMovies();

    dispatch({
      type: 'FETCH-ALL',
      payload: data.results,
    });
  } catch (err) {
    console.log(err.message);
  } finally {
    dispatch(setLoading(false));
  }
};

export const setLoading = (state) => {
  return { type: 'SET_LOADING', payload: state };
};
