import "../styles/header.css";
import { Link } from "react-router-dom"; 

function Header() {
  return (
    <header>
      <h1>Advanced Web App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <button>FI</button>
        <button>EN</button>
      </nav>
    </header>
  );
};

export default Header;