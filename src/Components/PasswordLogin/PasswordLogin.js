import './PasswordLogin.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import EdgeSvg from '../CommonStyles/EdgeSvg';
import Form from '../CommonStyles/Form';
import { useLocation } from 'react-router-dom';
import watch from '../Assets/watch.svg';
import pencil from '../Assets/pencil-icon.svg';

const PasswordLogin = () => {
        let location = useLocation();
        const { usrEmail } = location.state;
    const link = "#";
    const [passwordShown, setPasswordShown] = useState(false);
      const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };
    return (
      <EdgeSvg>
        <Form>
          <div className="form-text">
            <p>Log in</p>
            <p>Access your resource edge account</p>
          </div>
          <div className="form-sub-text-container">
            <div className="form-sub-text">
              <p>Ositadinma Nwangwu</p>
              <p>{usrEmail}</p>
            </div>
            <div className="pencil-icon">
              <img src={pencil} alt="" />
            </div>
          </div>
          <div className="form-input">
            <label htmlFor="loginPass">Password</label>
            <input
              type={passwordShown ? "text" : "password"}
              name="loginPass"
              id="loginPass"
              placeholder="Enter Password"
            />
            <img
              onClick={togglePasswordVisiblity}
              src={watch}
              alt=""
              className="watchIcon"
            />
          </div>
          <div className="loadingDiv">
            <NavLink to='/forget-password'>
              <button>Login</button>
            </NavLink>
          </div>
          <hr />
          <div className="password-forget">
            <NavLink to="/forget-password">
              <a href={link}>Forgot Password</a>
            </NavLink>
          </div>
        </Form>
      </EdgeSvg>
    );
}

export default PasswordLogin;