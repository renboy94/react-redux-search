export const Types = {
  GET_MOVIES_REQUEST: "GET_MOVIES_REQUEST",
  GET_MOVIES_SUCCESS: "GET_MOVIES_SUCCESS",
  DELETE_MOVIE: "DELETE_MOVIE",
  MOVIES_ERROR: "MOVIES_ERROR"
};

export const getMoviesRequest = movie => ({
  type: Types.GET_MOVIES_REQUEST,
  payload: { movie }
});

export const deleteMovie = movie => ({
  type: Types.DELETE_MOVIE,
  payload: {
    movie
  }
});

export const getMoviesSuccess = ({ items }) => ({
  type: Types.GET_MOVIES_SUCCESS,
  payload: {
    items
  }
});

export const moviesError = ({ error }) => ({
  type: Types.MOVIES_ERROR,
  payload: {
    error
  }
});
