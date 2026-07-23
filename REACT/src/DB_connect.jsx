import React, { useState } from "react";
import "./DB_connect.css";
function DB_connect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    msg: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputData = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus({ type: "", msg: "" });

    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit data");
      }

      setStatus({
        type: "success",
        msg: data.message || "Data submitted successfully!",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        msg: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="container">
    <div className="form-box">
      <h2>Send Message</h2>

      <form onSubmit={handleSubmit}>
        <label><b>Name:</b></label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputData}
          required
        />
        <label><b>Email:</b></label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputData}
          required
        />
        <label><b>Message:</b></label>
        <textarea
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleInputData}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {status.msg && (
        <p className={status.type === "success" ? "success" : "error"}>
          {status.msg}
        </p>
      )}
    </div>
  </div>
);
}

export default DB_connect;