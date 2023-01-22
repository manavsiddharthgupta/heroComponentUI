import "./navbar.css";
import athenaLogo from "../images/athena_icon.png";

const NavBar = () => {
  return (
    <nav className="nav_outer">
      <div className="logo_links">
        <img className="nav_logo" src={athenaLogo} alt="icon" />
        <ul className="allLinks">
          <li>Products</li>
          <li>Our Story</li>
          <li>Resources</li>
        </ul>
      </div>
      <button className="btn">Book a demo</button>
    </nav>
  );
};
export default NavBar;
