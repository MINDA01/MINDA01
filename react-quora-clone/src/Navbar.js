import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="qHeader-logo">
        <img src="" alt="" />
      </div>

      <div className="qHeader-icons">
        <div className="qHeader-icon">Home</div>
        <div className="qHeader-icon">BorderAllRounded</div>
        <div className="qHeader-icon">AssignmentInOutlined</div>
        <div className="qHeader-icon">PeopleAltOutlined</div>
        <div className="qHeader-icon">NotificationOutlined</div>
      </div>

      <div className="qHeader-input">
        <input type="text" placeholder="검색하기" />
      </div>

      <div className="qHeader-Rem">
        <div className="qHeader-avatar">Avartar</div>
        Language
        <button>질문하기</button>
      </div>
    </div>
  );
}

export default Navbar;
