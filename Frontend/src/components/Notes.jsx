import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_URL = "http://localhost:5000/notes";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({ title: "", message: "", date: "" });
  const [editingId, setEditingId] = useState(null);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("userName");

  // Redirect if not logged in
  useEffect(() => {
    if (!token) {
      alert("Please login first!");
      navigate("/login");
    }
  }, [token, navigate]);

  const fetchNotes = async () => {
    try {
      const res = await axios.get(BASE_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNotes(res.data);
    } catch {
      alert("Error fetching notes");
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = async () => {
    try {
      await axios.post(BASE_URL, form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Note saved!");
      setForm({ title: "", message: "", date: "" });
      fetchNotes();
    } catch {
      alert("Error saving note");
    }
  };

  const handleUpdate = async () => {
    if (!editingId) return alert("Select a note to update");
    try {
      await axios.put(`${BASE_URL}/${editingId}`, form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Note updated!");
      setEditingId(null);
      setForm({ title: "", message: "", date: "" });
      fetchNotes();
    } catch {
      alert("Error updating note");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Note deleted!");
      fetchNotes();
    } catch {
      alert("Error deleting note");
    }
  };

  const handleEdit = (note) => {
    setEditingId(note.id);
    setForm({ title: note.title, message: note.message, date: note.date });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #c033d0ff, #b41851ff)",
        padding: "100px",
      }}
    >
      <div className="container">
        <h1 className="mb-4 text-center fw-bold text-light">
          👋 Hello {userName || "Student"}.....!
        </h1>
        <h3 className="text-center text-white-50 mb-4">Manage Your Notes</h3>

        <div className="card shadow p-4 mb-4 border-0 rounded-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="form-control mb-3"
            value={form.title}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            className="form-control mb-3"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <input
            type="date"
            name="date"
            className="form-control mb-3"
            value={form.date}
            onChange={handleChange}
          />
          <div className="d-flex gap-2">
            <button onClick={handleSave} className="btn btn-success">
              Save
            </button>
            <button onClick={handleUpdate} className="btn btn-warning">
              Update
            </button>
          </div>
        </div>

        <h3 className="mb-3 text-white">📒 All Notes</h3>
        <div className="row">
          {notes.map((note) => (
            <div key={note.id} className="col-md-4">
              <div className="card shadow-sm border-0 mb-3 p-3 rounded-4">
                <h5 className="fw-bold">{note.title}</h5>
                <p>{note.message}</p>
                <p className="text-muted">{note.date}</p>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleEdit(note)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(note.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Features Section */}
<div className="mt-4 w-100 text-white">
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

export default Notes;
