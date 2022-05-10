import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaHome, FaMap } from "react-icons/fa";
import { MdArticle } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="nav">
      <li className="nav__link">
        <FaHome />
        <NavLink className="nav__text" to="/">
          Accueil
        </NavLink>
      </li>
      <li className="nav__link">
        <FaMap />
        <NavLink className="nav__text" to="/map">
          Carte
        </NavLink>
      </li>
      <li className="nav__link">
        <MdArticle />
        <NavLink className="nav__text" to="/Quiz">
          Quiz
        </NavLink>
      </li>
    </nav>
  );
}
