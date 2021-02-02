import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRecipes } from "./store/actions";

function Home() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadRecipes());
    }, []);
    return (
        <div>
            <h1>This is my Homepage</h1>
        </div>
    );
}

export default Home;
