import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>
        <a href="/">
          <img src="/logo.png" alt="logo" />
        </a>
        <ul>
          <li>
            <Link to="/login" />
          </li>
          <li>
            <Link to="/home" />
          </li>
        </ul>
      </h1>
    </div>
  );
}
