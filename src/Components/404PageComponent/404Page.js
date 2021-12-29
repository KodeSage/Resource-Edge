import './404Page.css';
import { NavLink } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import notfoundlogo from '../Assets/moon.png';
const NotFoundPage = () => {
    
    return (
      <div className="NotFound">
            <div className="notfound-content">
        
          <h1>
            4
            <span className="app-logo">
              <img src={notfoundlogo} />
            </span>
            4
          </h1>
          <h3>Whoops....... Page Not Found !!!</h3>
          <NavLink to="/" exact>
            <button>
              <FaArrowAltCircleLeft className='arrow' />
              Back to HomePage
            </button>
          </NavLink>
        </div>
      </div>
    );
}
export default NotFoundPage;