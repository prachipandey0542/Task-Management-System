function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #ff6a00, #ee0979, #00c6ff)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px",
      }}
    >
      {/* Hero Section */}
      <div
        className="p-5 rounded-4 shadow-lg text-center"
        style={{
          background: "rgba(255,255,255,0.15)",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        <h1 className="fw-bold display-4">📚 Welcome to StudentTodo</h1>
        <p className="lead mt-3">
          Organize your tasks, stay productive, and manage your study notes with ease.  
          Create, update, and keep track of your to-do list – all in one place.
        </p>

        <div className="d-flex justify-content-center gap-3 mt-4">
          <a
            href="/register"
            className="btn btn-light fw-semibold px-4 py-2 rounded-pill shadow-sm"
          >
            🚀 Get Started
          </a>
          <a
            href="/login"
            className="btn btn-outline-light fw-semibold px-4 py-2 rounded-pill"
          >
            🔑 Login
          </a>
        </div>

        <p className="mt-4 fst-italic">
          "Your success starts with small steps – plan them here."
        </p>
      </div>

      {/* Features Section */}
      <div className="mt-5 w-100">
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

export default Home;
