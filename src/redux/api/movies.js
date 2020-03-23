import axios from "axios";

export const getMovies = movie => {
  return axios.get(
    `https://jsonmock.hackerrank.com/api/movies/search/?Title=${movie}`
  );
};
