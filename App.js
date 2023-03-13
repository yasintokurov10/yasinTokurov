import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import About from "./components/About/About";
import AddBlog from "./components/AddBlog/AddBlog";
import Contacts from "./components/Contacts/Contacts";

import Home from "./components/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar>
          <Container>
            <Link to="/">Home</Link>

            <Link to="/add-blog">Add Blog</Link>

            <Link to="/about">About</Link>

            <Link to="/contacts">Contacts</Link>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-blog" element={<AddBlog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <footer></footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
