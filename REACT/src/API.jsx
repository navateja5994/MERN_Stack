import { useState, useEffect } from "react";
import axios from "axios";

function API() {
  const URL = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      const response = await axios.get(URL);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function addUser() {
    if (!name || !email) return;

    try {
      const response = await axios.post(URL, {
        name,
        email,
      });

      setUsers([...users, response.data]);
      setName("");
      setEmail("");
      alert("User Added scuccessfully !");
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteUser(id) {
    try {
      await axios.delete(`${URL}/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      alert("User Deleted !");
    } catch (error) {
      console.log(error);
    }
  }

  function editUser(user) {
    setEditId(user.id);
    setName(user.name);
    setEmail(user.email);
  }

  async function updateUser() {
    try {
      const response = await axios.put(`${URL}/${editId}`, {
        id: editId,
        name,
        email,
      });

      setUsers(
        users.map((user) =>
          user.id === editId ? response.data : user
        )
      );

      setEditId(null);
      setName("");
      setEmail("");
      alert("User Updated successfully !");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div style={{ padding: "20px" }} align="center">
      <h2>React CRUD Operations</h2>
      <label><b>Name:</b></label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />
      <label><b>Email:</b></label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      {editId ? (
        <button onClick={updateUser}>Update User</button>
      ) : (
        <button onClick={addUser}>Add User</button>
      )}

      <br />

{users.map((user) => (
  <div
    key={user.id}
    style={{
      border: "1px solid red",
      padding: "10px",
      margin: "10px 0",
      borderRadius: "5px",
    }}
  >
    <p><b>ID:</b> {user.id}</p>
    <p><b>Name:</b> {user.name}</p>
    <p><b>Email:</b> {user.email}</p>

    <button onClick={() => editUser(user)}>
      Edit
    </button>

    <button
      onClick={() => deleteUser(user.id)}
      style={{ marginLeft: "10px" }}
    >
      Delete
    </button>
  </div>
))}
      {/* <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => editUser(user)}>
                  Edit
                </button>
              </td>
              <td>
                <button onClick={() => deleteUser(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}

export default API;