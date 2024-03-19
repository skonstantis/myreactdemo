/* Author: Sotiris Konstantis */

import styles from "./form.module.css";
import { useState } from "react";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.inputField}
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          placeholder="Enter todo item to add..."
        />
        <button className={styles.inputButton} type="sumbit">
          Add
        </button>
      </div>
    </form>
  );
}
