/* Author: Sotiris Konstantis */

import { useState } from "react";
import { useEffect } from "react";

import styles from "./search.module.css"

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = "6b86e75fd5c041bca2581cdb22283187"; //this is a free api key from spoonacular with no associated billing plan. If still valid, feel free to use for testing of the app.

export default function Search({foodData, setFoodData}) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchSearch() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${apiKey}`);
      const data = await res.json();
      setFoodData(data.results);
    }
    fetchSearch();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      ></input>
    </div>
  );
}
