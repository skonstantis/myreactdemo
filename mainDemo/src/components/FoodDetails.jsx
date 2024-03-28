/* Author: Sotiris Konstantis */

import styles from "./foodDetails.module.css";

import { useState } from "react";
import { useEffect } from "react";

export default function FoodDetails({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const apiKey = "6b86e75fd5c041bca2581cdb22283187"; //this is a free api key from spoonacular with no associated billing plan. If still valid, feel free to use for testing of the app.

  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFood() {
      setIsLoading(true);
      const response = await fetch(`${URL}?apiKey=${apiKey}`);
      const data = await response.json();
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div className={styles.recipeCard}>
      <div>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏱️ {food.readyInMinutes} minutes</strong>
          </span>
          <span>
            <strong>🍽️ {food.servings} servings</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian" : "🥩 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>
              💲 {(food.pricePerServing / 100).toFixed(2)} per serving
            </strong>
          </span>
        </div>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        food.extendedIngredients.map((item) => (
          <div>
            <img
              src={
                `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
              }
              alt=""
            ></img>
            <h3>{item.name}</h3>
            <h3>{item.amount}{item.unit}</h3>
          </div>
        ))
      )}

      <h2>Instructions</h2>
      <div className={styles.recipeInstructions}>
        <ol>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
}
