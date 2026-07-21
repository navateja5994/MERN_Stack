import biryaniImage from "./assets/Biryani.jpg";

function Biryani(props) {
  return (
    <div>
      <h1 style={{ color: "aqua" }}>Special Biryani</h1>

      <p>
        {props.name} is a mixed rice dish traditionally made with rice, meat
        (chicken, goat, beef), seafood (prawns or fish), or vegetables, and
        spices. It was present in Mughal-era India, though whether it was
        created there is {props.color}.
      </p>

      <img
        src={biryaniImage}
        alt="Biryani"
        height="200"
        width="250"
      />
    </div>
  );
}

export default Biryani;