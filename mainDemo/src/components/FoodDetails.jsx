/* Author: Sotiris Konstantis */

import styles from "./foodDetails.module.css";

import { useState } from "react";
import { useEffect } from "react";

export default function FoodDetails({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const apiKey = "6b86e75fd5c041bca2581cdb22283187"; //this is a free api key from spoonacular with no associated billing plan. If still valid, feel free to use for testing of the app.

  const [food, setFood] = useState({});

  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?apiKey=${apiKey}`);
      const data = await response.json();
      setFood(data);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      {food.title}
      <img src={food.image} alt="" />
    </div>
  );
}
