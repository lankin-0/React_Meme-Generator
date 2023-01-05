import "./Header.css";
import logo from "../img/trollFace.png";

function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="nav-logo" src={logo} alt="logo" />

        <h1 className="nav-title">Meme Generator</h1>

        <h3 className="nav-project">Just For Fun!</h3>
      </nav>
    </header>
  );
}

export default Header;
