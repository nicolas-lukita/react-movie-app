const initialState = {
  movies: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH-ALL':
      return {
        ...state,
        movies: [...action.payload],
      };
    default:
      return state;
  }
};

export default movieReducer;
