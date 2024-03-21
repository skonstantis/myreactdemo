/* Author: Sotiris Konstantis */

import styles from "./form.module.css";
import { useState } from "react";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();

      if(todo.name == "")
        return;

      if(todos.filter((thisTodo) => thisTodo.name === todo.name).length != 0)
        return;

    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.inputField}
          type="text"
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          placeholder="Enter todo item to add..."
        />
        <button className={styles.inputButton} type="sumbit">
          Add
        </button>
      </div>
    </form>
  );
}
