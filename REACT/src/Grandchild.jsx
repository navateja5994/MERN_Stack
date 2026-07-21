import { useContext } from "react";
import UserContect from "./UserContect";

function GrandChild() {
  const name = useContext(UserContect);

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

export default GrandChild;