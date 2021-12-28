import './Login.css';
import { useState } from 'react';
import EdgeSvg from '../CommonStyles/EdgeSvg';
import Form from '../CommonStyles/Form';
import { NavLink } from 'react-router-dom';
const Login = () => {
     const link = "#";
     const [email, setEmail] = useState("");

     const handleChange = (e) => {
       setEmail(e.target.value);
     };

    return (
      <EdgeSvg>
        <Form>
          <div className="form-text">
            <p>Log in</p>
            <p>Access your resource edge account</p>
          </div>
          <div className="form-input">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="loadingDiv">
            <NavLink to="/password" state={{ usrEmail: email }}>
              <button>Next</button>
            </NavLink>
          </div>
          <hr />
        </Form>
      </EdgeSvg>
    );

}

export default Login;