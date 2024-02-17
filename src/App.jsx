import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Users from "./Components/Users";
import UserDetails from "./Components/UserDetails";

function App() {
  return (
    <>
      <nav className="bg-red-300 flex gap-2 p-2 justify-end">
        <Link className="bg-sky-300 rounded-md px-2 py-1" to="/">
          Home
        </Link>
        <Link className="bg-sky-300 rounded-md px-2 py-1" to="/contact">
          Contact
        </Link>
        <Link className="bg-sky-300 rounded-md px-2 py-1" to="/about">
          About
        </Link>
        <Link className="bg-sky-300 rounded-md px-2 py-1" to="/users">
          Users
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/:id" element={<UserDetails/>}/>
      </Routes>
    </>
  );
}

export default App;
