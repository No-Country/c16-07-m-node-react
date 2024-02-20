import "./App.css";
import Navbar from "./components/Navbar";
// import Button from './components/ui/button'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/login";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
