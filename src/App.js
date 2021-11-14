import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/';
import About from './pages/about';
import Politics from './pages/politics';
import SignUp from './pages/sign-up';
import SignIn from './pages/signin';
import Search from './components/Navbar/search';


function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Search />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
