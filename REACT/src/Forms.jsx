import { useState } from "react";

function Forms() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    skills: ""
  });

  const [data, setData] = useState({});

  const change = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(user);
  };

  return (
    <div align="center">
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        Name:
        <br />
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={change}
        />
        <br /><br />

        Email:
        <br />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={change}
        />
        <br /><br />

        Password:
        <br />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={change}
        />
        <br /><br />

        Phone:
        <br />
        <input
          type="tel"
          name="phone"
          value={user.phone}
          onChange={change}
        />
        <br /><br />

        Gender:
        <br />
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={change}
        /> Male

        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={change}
        /> Female

        <br /><br />

        Skills:
        <br />
        <select
          name="skills"
          value={user.skills}
          onChange={change}
        >
          <option value="">Select</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="React">React</option>
        </select>

        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <h2>Submitted Details</h2>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Password: {data.password}</p>
      <p>Phone: {data.phone}</p>
      <p>Gender: {data.gender}</p>
      <p>Skill: {data.skills}</p>
    </div>
  );
}

export default Forms;