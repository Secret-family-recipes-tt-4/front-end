import React from "react";

function Home() {
    const handleSearchChange = (e) => {
        const searchWord = e.target.value;
        if (searchWord.length >= 3) {
        }
    };
    return (
        <div>
            <h1>This is my Homepage</h1>
            <form className="d-flex">
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    name="search"
                    onChange={handleSearchChange}
                />
                <button className="btn btn-outline-success" type="submit">
                    Search
                </button>
            </form>
        </div>
    );
}

export default Home;
