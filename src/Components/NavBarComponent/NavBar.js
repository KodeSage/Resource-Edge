
import logo from '../Assets/desktoplogo.svg';
import './NavBar.css';

const NavBar = () => {
    const link = '#';
    const burger = document.querySelector(".burger") && document.querySelector(".burger");
    return (
      <nav className="navbar">
        <div className="navbar-brand container">
          <div className="navbar-left">
            <div className="navbar-logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="navbar-left-a">
              <a href={link}>Features</a>
              <a href={link}>About</a>
            </div>
          </div>
          <div className="navbar-right">
            <button className="sign-up-btn">Sign up</button>
            <button className="sign-in-btn">Sign in</button>
          </div>
          <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </nav>
    );
}
 
export default NavBar;