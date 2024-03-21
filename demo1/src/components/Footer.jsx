/* Author: Sotiris Konstantis */

import styles from "./footer.module.css";

export default function Footer({ todos }) {
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;

  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Todos: {completedTodos}</span>
      <span className={styles.item}>Total Todos: {totalTodos}</span>
    </div>
  );
}
