import { useState } from "react";
import bulbOn from "./assets/bulb-on.png";
import bulbOff from "./assets/bulb-off.png";
function Light() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Light ON/OFF</h2>

      <img
        src={isOn ? bulbOn : bulbOff}
        alt="Bulb"
        width="200"
      />

      <br />
      <br />

      <button onClick={() => setIsOn(true)}>
        ON
      </button>

      <button
        onClick={() => setIsOn(false)}
        style={{ marginLeft: "10px" }}
      >
        OFF
      </button>
    </div>
  );
}

export default Light;