import { useState, useEffect } from "react";
import UserContect from "./UserContect";
import Parent from "./Parent";
import "./Count.css";

function Count() {
  const [count, setCount] = useState(0);
  const [string, setString] = useState(false);
  const [lunch, setLunch] = useState("Pizza");

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div align="center">
      <h1>Count: {count}</h1>

      <button onDoubleClick={() => setCount(count + 1)}>+1</button>
      <button onDoubleClick={() => setCount(count - 1)}>-1</button>

      <h3>{string ? "Hello" : "iPhone"}</h3>
      <button onClick={() => setString(!string)}>Change</button>

      <h2>I ate my {lunch} for Lunch.</h2>

      <input
        type="text"
        value={lunch}
        onChange={(e) => setLunch(e.target.value)}
      />

      <hr />

      <UserContect.Provider value="Teja">
        <Parent />
      </UserContect.Provider>
    </div>
  );
}

export default Count;