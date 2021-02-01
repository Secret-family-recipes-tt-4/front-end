import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Sign from "./Sign";
import New from "./New";
import { Container, Col } from "react-bootstrap";

const initialRecipeValues = {
  // text inputs
  recipe: "",
  source: "",
  ingredients: "",
  instructions: "",
  // dropdown
  category: "",
};
const initialRecipeErrors = {
  recipe: "",
  source: "",
  ingredients: "",
  instructions: "",
  category: "",
};
const initalRecipe = [];
const initialDisabled = true;

function App() {
  ///// STATES /////
  const [recipe, setRecipt] = useState(initalRecipe);
  const [recipeValues, setRecipeValues] = useState(initialRecipeValues);
  const [recipeErrors, setRecipeErrors] = useState(initialRecipeErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  return (
    <div>
      <Header />
      <Container>
        <Col>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/New">
            <New />
          </Route>
          <Route exact path="/Sign">
            <Sign />
          </Route>
        </Col>
      </Container>
    </div>
  );
}

export default App;
