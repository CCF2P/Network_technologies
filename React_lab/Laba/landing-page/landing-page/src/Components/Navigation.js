import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <p>
        Bubulda <img src={"https://ctftime.org/media/team/monkey.jpg"} alt="logo" className="logo" /> gorillas
      </p>
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li>
          {" "}
          <Link to="/header">Home</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/services">Service</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
            
        </li>
      </ul>
    </nav>
  );
}