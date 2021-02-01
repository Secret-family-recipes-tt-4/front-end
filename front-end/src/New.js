import React from "react";
import { Form } from "react-bootstrap";

function New() {
  return (
    <div>
      <h1>This is my New page</h1>
      <Form>
        <Form.Group className="form-group">
          <Form.Label>Recipe Name: </Form.Label>
          <Form.Control
            name="recipe"
            type="Recipe Name"
            placeholder="Recipe Name"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Label>Recipe Source: </Form.Label>
          <Form.Control name="source" type="name" placeholder="Source" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Ingredients: </label>
          <textarea
            className="form-control"
            name="ingredients"
            id="exampleFormControlTextarea1"
            rows="5"
          />
        </Form.Group>

        <Form.Group className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Instructions: </label>
          <textarea
            className="form-control"
            name="instructions"
            id="exampleFormControlTextarea1"
            rows="5"
          />
        </Form.Group>

        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Categories
          </button>
          <div
            class="dropdown-menu"
            name="category"
            aria-labelledby="dropdownMenuButton"
          >
            <p class="dropdown-item">Breakfast</p>
            <p class="dropdown-item">Lunch</p>
            <p class="dropdown-item">Dinner</p>
            <p class="dropdown-item">Dessert</p>
          </div>
        </div>
      </Form>
      <div>
        <button class="btn btn-success" type="submit">
          Submit Recipe
        </button>
      </div>
    </div>
  );
}

export default New;
