import About from "./components/about";
import Home from "./components/home";
// import Student from "./Student";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <>
    <div >
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
    </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
