import React from "react";
import Container from "../CommonStyles/Container";
import "./DashBoardMain.css";
import { NavLink } from "react-router-dom";
const DashBoardMain = () => {
    return (
      <Container>
        <main>
          <div className="main-text">
            <h2>Hello, Ositadinma Nwangwu</h2>
            <p>Welcome and Good to have you back.</p>
          </div>
          <div className="main-tabs">
            <h3>Things to do</h3>
            <div className="dashboard-tab">
              <div>
                <div className="empty"></div>
                <p>Upload your employee performance agreement</p>
              </div>
              <NavLink to="/*">
                <button className="begin">Begin</button>
              </NavLink>
            </div>
            <div className="dashboard-tab">
              <div>
                <div className="empty"></div>
                <p>Start quarterly self review</p>
              </div>
              <NavLink to="/*">
                <button className="resume">Resume </button>
              </NavLink>
            </div>
          </div>
        </main>
      </Container>
    );
};

export default DashBoardMain;
