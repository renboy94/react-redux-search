import { takeLatest, call, fork, put } from "redux-saga/effects";
import * as actions from "../actions/movies";
import * as api from "../api/movies";

function* getMovies(action) {
  try {
    const result = yield call(api.getMovies, action.payload.movie);
    yield put(
      actions.getMoviesSuccess({
        items: result.data.data
      })
    );
  } catch (e) {
    yield put(
      actions.moviesError({
        error: "An error occured when trying to get the movies"
      })
    );
  }
}

function* watchGetMoviessRequest() {
  yield takeLatest(actions.Types.GET_MOVIES_REQUEST, getMovies);
}

const moviesSagas = [fork(watchGetMoviessRequest)];

export default moviesSagas;
