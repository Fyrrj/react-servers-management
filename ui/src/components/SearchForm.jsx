import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../styles/SearchForm.css";

const SearchForm = ({ handleSearchServer }) => {
  return (
    <div className="searchForm">
      <div className="searchForm__inner">
        <SearchIcon className="searchForm__icon" />
        <input
          className="searchForm__input"
          type="text"
          placeholder="Search"
          onChange={handleSearchServer}
        />
      </div>
    </div>
  );
};

export default SearchForm;
