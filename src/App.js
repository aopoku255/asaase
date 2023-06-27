import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<IndexPage />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
