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
<<<<<<< HEAD
            <h1>This is my Homepage</h1>
            {console.log(state.recipes)}
=======
            <h1>This is a landing page maybe?</h1>
>>>>>>> b963cba0fa25f30e4e97715adb72c23f142b9836
        </div>
    );
}

export default Home;
