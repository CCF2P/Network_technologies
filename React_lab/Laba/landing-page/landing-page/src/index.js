import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./routs/header.js";
import Services from "./routs/services";
import About from "./routs/about";

const name = "Gorilla";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="header" element={<Header />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About link={"https://www.youtube.com/watch?v=wc1F6N-MzhU&t=316s"} />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
