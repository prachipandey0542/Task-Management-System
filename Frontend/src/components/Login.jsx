import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/login", form);
      const { token, name } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("userName", name);

      alert("Login Successfull.....!");
      navigate("/notes");
    } catch (err) {
      alert("Error: " + (err.response?.data?.msg || err.message));
    }
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-white"
      style={{
        minHeight: "100vh",
        width: "100vw",
        background:
          "linear-gradient(135deg, #ff6a00 0%, #ee0979 50%, #00c6ff 100%)",
        padding: "100px",
      }}
      
    >

      <h1 className="mb-5">Welcome To Login Page.....!</h1>
      {/* Login Form */}
      <div
        className="card shadow-lg p-4 border-0 rounded-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-4 text-primary fw-bold">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 fw-bold rounded-pill"
          >
            Login
          </button>
        </form>
      </div>

      {/* Features Section */}
      <div className="mt-5 w-100 text-white">
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

export default Login;
