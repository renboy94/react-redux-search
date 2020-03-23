import { all } from "redux-saga/effects";
import MoviesSagas from "./movies";

export default function* rootSaga() {
  yield all([...MoviesSagas]);
}
