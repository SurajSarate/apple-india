import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/comman/navbar/Navbar";
import Home from "./screens/Home";
import Imac from "./screens/Imac";
import ImacFeatures from "./screens/ImacFeatures";
import Iwatch from "./screens/Iwatch";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/imac" element={<Imac />} />
          <Route path="/about" element={<ImacFeatures />} />
          <Route path="/iwatch" element={<Iwatch />} />
        </Routes>

      </>
    </Router>
  );
}

export default App;
