import footerlogo from '../Assets/footer-logo.svg';
import facebook from '../Assets/facebook.svg';
import twitter from "../Assets/twitter.svg";
import linkedin from '../Assets/linkedin.svg';
import instagram from '../Assets/instagram.svg';
import './Footer.css';
import Container from '../CommonStyles/Container';
const Footer = () => { 
    return (
      <footer className="footer">
        <Container>
          <div className="footer-contents">
            <div className="footer-logo">
              <img src={footerlogo} alt="footer-logo" />
            </div>
            <div className="footer-link">
              <div className="footer-social-link">
                <a href="">
                  <img src={facebook} />
                </a>
                <a href="">
                  <img src={twitter} />
                </a>
                <a href="">
                  <img src={linkedin} />
                </a>
                <a href="">
                  <img src={instagram} />
                </a>
              </div>
              <div className="footer-link-text">
                <p>Copyright © Genesys DevStudio . All rights reserved</p>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    );
}

export default Footer;