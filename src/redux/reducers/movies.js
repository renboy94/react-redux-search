import { Types } from "../actions/movies";

const INITIAL_STATE = {
  items: [],
  error: ""
};

export default function movies(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_MOVIES_SUCCESS: {
      return {
        ...state,
        items: action.payload.items
      };
    }
    case Types.DELETE_MOVIE: {
      console.log("called delete");
      return {
        ...state,
        items: state.items.filter(movie => {
          console.log(action.payload.movie);
          return movie.imdbID !== action.payload.movie;
        })
      };
    }
    case Types.MOVIES_ERROR: {
      return {
        ...state,
        error: action.payload.error
      };
    }
    default: {
      return state;
    }
  }
}
