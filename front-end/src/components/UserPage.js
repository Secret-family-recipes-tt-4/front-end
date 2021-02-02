import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { loadRecipes } from "../store/actions";
import Recipes from "./Recipes";

const UserPage = (props) => {
    const [filteredRecipes, setFilteredRecipes] = useState(props.recipes);
    const [searchWord, setSearchWord] = useState("");
    useEffect(() => {
        props.loadRecipes();
    }, []);

    useEffect(() => {
        setFilteredRecipes(props.recipes);
    }, [props.recipes]);

    const handleSearchChange = (e) => {
        setSearchWord(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchWord.length >= 3) {
            const filtered = props.recipes.filter((recipe) => {
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
            setFilteredRecipes(props.recipes);
        }
    };

    return (
        <div>
            <h1>Hello, user</h1>
            <form className="d-flex">
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    name="search"
                    onChange={handleSearchChange}
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
