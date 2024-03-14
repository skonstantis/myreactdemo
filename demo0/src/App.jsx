/* Author: Sotiris Konstantis */
import ConditionalJSX from "./components/ConditionalJSX";
import ConditionalComponent from "./components/ConditionalComponent";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {
  const person = {
    message: "Hi, my name is ",
    name: "Sotiris",
    emoji : "👋"
  }

  return (
    <div className="App">
      <Hello person = {person}/>
      <Form/>
      <Fruits />
      <ConditionalComponent/>
      <ConditionalJSX/>
      <Message/>
      <Counter/>
    </div>
  );
}

export default App;
