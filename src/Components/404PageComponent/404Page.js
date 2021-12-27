import './404Page.css';
import { NavLink } from "react-router-dom";
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
              <i class="fas fa-arrow-left"></i>
              Back to HomePage
            </button>
          </NavLink>
        </div>
      </div>
    );
}
export default NotFoundPage;