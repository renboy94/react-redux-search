import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { connect } from "react-redux";
import { getMoviesRequest } from "../redux/actions/movies";

const SearchInput = props => {
  const [input, setInput] = useState("");

  const handleInputChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.getMoviesRequest(input);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup
        className="col-md-12"
        style={{
          display: "flex"
        }}
      >
        <Label for="movieTitle" hidden>
          Search movie title
        </Label>
        <Input
          type="text"
          name="movie"
          id="movieTitle"
          placeholder="Search movie title"
          onChange={handleInputChange}
        />
        <Button outline color="primary" type="submit">
          Submit
        </Button>
      </FormGroup>{" "}
    </Form>
  );
};

export default connect(null, {
  getMoviesRequest
})(SearchInput);
