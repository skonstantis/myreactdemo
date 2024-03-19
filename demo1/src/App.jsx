/* Author: Sotiris Konstantis */

import Header from "./components/Header";
import Todo from "./components/Todo";
import styles from "./app.css"

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Todo />
    </div>
  );
}
