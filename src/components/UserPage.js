import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { loadRecipes } from "../store/actions";
import Recipes from "./Recipes";

const UserPage = ({ recipes, loadRecipes }) => {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    loadRecipes();
  }, [loadRecipes]);

  useEffect(() => {
    setFilteredRecipes(recipes);
    setSearchWord("");
  }, [recipes]);

  useEffect(() => {
    if (searchWord.length >= 3) {
      const filtered = recipes.filter((recipe) => {
        if (
          recipe.title.toLowerCase().includes(searchWord) ||
          recipe.categories.toLowerCase().includes(searchWord)
        ) {
          return recipe;
        }
        return null;
      });
      setFilteredRecipes(filtered);
    } else {
      setFilteredRecipes(recipes);
    }
  }, [recipes, searchWord]);

  const handleSearchChange = (e) => {
    setSearchWord(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchWord.length >= 3) {
      const filtered = recipes.filter((recipe) => {
        if (
          recipe.title.toLowerCase().includes(searchWord) ||
          recipe.categories.toLowerCase().includes(searchWord)
        ) {
          return recipe;
        }
        return null;
      });
      setFilteredRecipes(filtered);
    } else {
      setFilteredRecipes(recipes);
    }
  };

  // eslint-disable-next-line no-undef
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Hello, user!</h1>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          aria-label="Search"
          name="search"
          value={searchWord}
          onChange={handleSearchChange}
          placeholder="search by title or category"
        />
        <button
          className="btn btn-success"
          type="submit"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
      <Recipes recipes={filteredRecipes} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, { loadRecipes })(UserPage);
