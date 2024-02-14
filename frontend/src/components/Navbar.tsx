import { Link } from "react-router-dom";

export default function Navbar() {
  const navbarStyle = {
    backgroundColor: "whitesmoke",
    color: "black",
    // padding: "10px",
    display: "block",

    // Agrega más propiedades de estilo según lo necesites
  };
  return (
    <div className="navbar" style={navbarStyle}>
      <nav>
        <Link to="/">
          <img src="/logo.png" alt="logo" />
        </Link>
        <ul>
          <li style={{ display: "inline" }}>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Home">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
