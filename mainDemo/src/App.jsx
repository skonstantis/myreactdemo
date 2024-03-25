/* Author: Sotiris Konstantis */

import FoodList from "./components/FoodList";
import Search from "./components/Search";
import { useState } from "react";

export default function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="App">
      <Search foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData={foodData}/>
    </div>
  );
}
