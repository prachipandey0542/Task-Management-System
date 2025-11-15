import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Menu() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // agar token hai to true
  }, [location]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/"; // logout ke baad home bhejna
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        background: "linear-gradient(90deg, #71411eff, #ee0979, #f700ffff)",
      }}
    >
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold text-white" to="/">
          🎓 StudentTodo
        </Link>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {!isLoggedIn ? (
              <>
                <li className="nav-item mx-2">
                  <Link
                    className={`nav-link fw-semibold px-3 py-2 rounded ${
                      location.pathname === "/"
                        ? "bg-white text-dark shadow-sm"
                        : "text-white"
                    }`}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link
                    className={`nav-link fw-semibold px-3 py-2 rounded ${
                      location.pathname === "/register"
                        ? "bg-white text-dark shadow-sm"
                        : "text-white"
                    }`}
                    to="/register"
                  >
                    Register
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link
                    className={`nav-link fw-semibold px-3 py-2 rounded ${
                      location.pathname === "/login"
                        ? "bg-white text-dark shadow-sm"
                        : "text-white"
                    }`}
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item mx-2">
                  <Link
                    className={`nav-link fw-semibold px-3 py-2 rounded ${
                      location.pathname === "/"
                        ? "bg-white text-dark shadow-sm"
                        : "text-white"
                    }`}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link
                    className={`nav-link fw-semibold px-3 py-2 rounded ${
                      location.pathname === "/notes"
                        ? "bg-white text-dark shadow-sm"
                        : "text-white"
                    }`}
                    to="/notes"
                  >
                    Notes
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <button
                    onClick={handleLogout}
                    className="btn btn-primary fw-semibold px-3 py-2 rounded"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
