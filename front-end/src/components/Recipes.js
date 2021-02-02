import React from 'react'
import Recipe from './Recipe';

export default function Recipes({recipes}) {
    return (
        <div>
            <>
            {/* {recipes.map((recipe)=>{
              return  <Recipe 
                categories={recipes.categories}
                ingredients={recipes.ingredients}
              />
            })} */}
            <h1>Hello from recipes</h1>
            </>
        </div>
    )
}
