import React from "react";
import UserImg from "./user.png";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <Link to="/" className={styles.logo}>
          Flipplt
        </Link>

        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link to="/create">Create</Link>
            </li>
            <li>
              <Link to="/study">Study</Link>
            </li>
            <li>
              <Link to="/stats">Stats</Link>
            </li>
          </ul>
        </nav>

        <img src={UserImg} alt="User" style={{ width: 50 }} />
        <Link to="/signup">Sign Up</Link>
      </div>
    </header>
  );
};

export default Header;
