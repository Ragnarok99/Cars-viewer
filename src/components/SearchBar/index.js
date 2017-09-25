import React from "react";

const SearchBar = ({search, foundResults}) => {
  return (
    <div className="row mb-2">
      <div className="col-lg-12">
        <div className="input-group">
          <input
            onChange={(e)=> search(e.target.value) }
            type="text"
            className="form-control"
            placeholder="Search for..."
            aria-label="Search for..."
          />
        </div>
      </div>
      {!foundResults && <div>I didn´t found anything</div>}

    </div>
  );
};

export default SearchBar;
