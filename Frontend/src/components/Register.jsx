import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/register", form);
      alert(res.data.msg || "Registration Successfull.....!");
      setForm({ name: "", email: "", password: "" }); // reset form
    } catch (err) {
      alert("Error: " + (err.response?.data?.msg || err.message));
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #ff6a00, #ee0979, #00c6ff)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "100px",
      }}
    >
      <h1 className="mb-5" style={{ color: "white" }}>
        Welcome To Registration Page.....!
      </h1>

      {/* Register Form */}
      <div
        className="p-5 rounded-4 shadow-lg mb-5"
        style={{
          background: "rgba(255,255,255,0.85)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h2 className="fw-bold text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control rounded-3"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control rounded-3"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control rounded-3"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 rounded-3">
            Register
          </button>
        </form>
      </div>

      {/* Features Section */}
      <div className="mt-2 w-100 text-white">
        <h2 className="fw-bold mb-4 text-center">✨ Features</h2>
        <div
          className="d-flex flex-wrap justify-content-center gap-4"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          <div
            className="p-4 rounded-4 shadow-lg"
            style={{ background: "rgba(255,255,255,0.15)", width: "280px" }}
          >
            <h4>📝 Task Management</h4>
            <p>Create, update and delete tasks with ease.</p>
          </div>

          <div
            className="p-4 rounded-4 shadow-lg"
            style={{ background: "rgba(255,255,255,0.15)", width: "280px" }}
          >
            <h4>📅 Deadlines</h4>
            <p>Set reminders and never miss your important dates.</p>
          </div>

          <div
            className="p-4 rounded-4 shadow-lg"
            style={{ background: "rgba(255,255,255,0.15)", width: "280px" }}
          >
            <h4>🗒️ Notes</h4>
            <p>Save your quick notes along with tasks.</p>
          </div>

          <div
            className="p-4 rounded-4 shadow-lg"
            style={{ background: "rgba(255,255,255,0.15)", width: "280px" }}
          >
            <h4>📊 Progress Tracking</h4>
            <p>Track your completed vs pending tasks visually.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
