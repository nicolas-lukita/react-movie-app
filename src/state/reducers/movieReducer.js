const initialState = {
  movies: [],
  isLoading: false,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH-ALL':
      return {
        ...state,
        movies: [...action.payload],
      };
    case 'SET_LOADING': {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default:
      return state;
  }
};

export default movieReducer;
