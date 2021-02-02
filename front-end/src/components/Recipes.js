import React from "react";
import Recipe from "./Recipe";

export default function Recipes({ recipes }) {
    return (
        <div>
            <>
                {recipes.map((recipe) => {
                    return <Recipe recipe={recipe} />;
                })}
            </>
        </div>
    );
}
