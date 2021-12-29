import Container from '../CommonStyles/Container';
import './DashBoardNav.css';
import { useState } from 'react';
import { FaBars, FaUserCircle, FaUserPlus } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/desktoplogo.svg';
import TalentManger from "../Assets/TalentManager.svg";
import Employee from "../Assets/Employee.svg";

const DashBoardNav = () => {

   const [click, setClick] = useState(false);
   const handleClick = () => setClick(!click);

    return (
      <Container className="dash-header">
        <div className="dash-menu">
          <FaBars className="dashmenu-icon" />
        </div>
        <div className="dashlogo">
          <img src={logo} alt="navlogo" />
        </div>
        <nav>
          <div className="dash-name">
            <p>TM Dashboard</p>
          </div>
          <div className="dash-avater" onClick={handleClick}>
            {click ? (
              <FaUserPlus className="avater" />
            ) : (
              <FaUserCircle className="avater" />
            )}
          </div>
          <div className={click ? "dashLink active" : "dashLink"}>

            <p>Ositadinma Nwangwu</p>
            <h4>Profile</h4>
            <div className="resource">
              <p>Use as Resource Edge As</p>
              <div className="talent-man">
                <img src={TalentManger} alt="talent-manger" />
                <p>TalentManager</p>
              </div>
              <div className="employeee">
                <img src={Employee} alt="employee" />
                <p>Employee</p>
              </div>
            </div>
            <div className="logout">
              <NavLink to="/sign-in">
                <p>Logout</p>
              </NavLink>
            </div>
          </div>
        </nav>
      </Container>
    );
}

export default DashBoardNav;