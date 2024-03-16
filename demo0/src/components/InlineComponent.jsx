/* Author: Sotiris Konstantis */
import styles from "./inlinecomponent.module.css";

const style = { color: "blue", fontSize: "24px" };

export default function InlineComponent() {
  return (
    <div>
      <h1 style={style}>This is an inline css component!</h1>
      <h1 className={styles.style}>This is another inline css component!</h1>
    </div>
  );
}
