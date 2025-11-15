import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Notes from "./components/Notes";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </Router>
  );

}

export default App;