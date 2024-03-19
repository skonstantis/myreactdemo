/* Author: Sotiris Konstantis */

import styles from "./todolist.module.css"
import TodoItem from "./TodoItem";

export default function TodoList({todos, setTodos}) {
  return (
    <div className={styles.list}>
      {todos.map((item) => (
        <TodoItem key={item} item={item} todos={todos} setTodos = {setTodos}/>
      ))}
    </div>
  );
}
