
import logo from '../Assets/desktoplogo.svg';
import './NavBar.css';
import Container from '../CommonStyles/Container';

const NavBar = () => {
  const link = '#';
  
  return (
    <header className="site-header">
      <Container className="navbar-brand">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-middle">
          <div className="navbar">
            <ul>
              <li>
                <a href={link}>Features</a>
              </li>
              <li>
                <a href={link}>About</a>
              </li>
            </ul>
          </div>
          <div className="navbar-right">
            <a href={link}>
              <span className="sign-up-btn">Sign up</span>
            </a>
            <a href={link}>
              <span className="sign-in-btn">Sign in</span>
            </a>
          </div>
          <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </Container>
    </header>
    // <nav className="navbar">
    //   <div className="navbar-brand container">
    //     <div className="navbar-left">
    //       <div className="navbar-logo">
    //         <img src={logo} alt="logo" />
    //       </div>
    //       <div className="navbar-left-a">
    //         <a href={link}>Features</a>
    //         <a href={link}>About</a>
    //       </div>
    //     </div>
    //     <div className="navbar-right">
    //       <button className="sign-up-btn">Sign up</button>
    //       <button className="sign-in-btn">Sign in</button>
    //     </div>
    //     <div className="burger">
    //       <div className="line1"></div>
    //       <div className="line2"></div>
    //       <div className="line3"></div>
    //     </div>
    //   </div>
    // </nav>
  );
  
}
 
export default NavBar;