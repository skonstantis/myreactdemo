/* Author: Sotiris Konstantis */

import styles from "./foodItem.module.css";

export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.itemButtonContainer}>
        <button
          onClick={() => {
            setFoodId(food.id);
          }}
          className={styles.itemButton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
