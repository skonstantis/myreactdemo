/* Author: Sotiris Konstantis */
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <h2>
        Welcome, {name.firstName} {name.lastName}
      </h2>
      <form>
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          placeholder="your first name"
          value={name.firstName}
        ></input>
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          placeholder="your last name"
          value={name.lastName}
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            alert(name.firstName + " " + name.lastName);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
