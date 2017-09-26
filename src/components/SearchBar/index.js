import React, { PropTypes } from "react";

const SearchBar = ({ search, foundResults }) => {
  return (
    <div className="row mb-2">
      <div className="col-lg-12">
        <div className="input-group">
          <input
            onChange={e => search(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Search for..."
            aria-label="Search for..."
          />
        </div>
        {!foundResults && (
          <div>
            There are not results for that <strong>manufacturer</strong>
          </div>
        )}
      </div>
    </div>
  );
};

SearchBar.PropTypes = {
  search: PropTypes.func,
  foundResults: PropTypes.bool
};

export default SearchBar;
