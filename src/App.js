import React from "react";
import SearchDataTable from "./components/SearchDataTable";
import SearchInput from "./components/SearchInput";

function App() {
  return (
    <div className="container mt-5 col-md-8">
      <div className="row"></div>
      <SearchInput />
      <SearchDataTable />
    </div>
  );
}

export default App;
