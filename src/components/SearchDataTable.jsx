import React from "react";
import DataTable from "react-data-table-component";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { getMoviesRequest, deleteMovie } from "../redux/actions/movies";

const SearchDataTable = props => {
  const columns = [
    {
      name: "Title",
      selector: "Title",
      sortable: true
    },
    {
      name: "Year",
      selector: "Year",
      sortable: true
    },
    {
      name: "imdbID",
      selector: "imdbID",
      sortable: true
    },
    {
      button: true,
      cell: row => (
        <Button
          outline
          color="danger"
          onClick={() => {
            deleteMovie(`${row.imdbID}`);
          }}
        >
          Delete
        </Button>
      )
    }
  ];

  const deleteMovie = imdbID => {
    props.deleteMovie(imdbID);
  };

  return (
    <DataTable title="Movie List" columns={columns} data={props.movies.items} />
  );
};

export default connect(({ movies }) => ({ movies }), {
  getMoviesRequest,
  deleteMovie
})(SearchDataTable);
