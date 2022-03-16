import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import "./Navbar.css";

function Navbar() {
  const user = useSelector(selectUser);
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
        <div className="qHeader-avatar">
          <img src={user.photo} alt="프로필" onClick={() => auth.signOut()} />
        </div>
        Language
        <button>질문하기</button>
      </div>
    </div>
  );
}

export default Navbar;
