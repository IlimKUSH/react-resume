import React from "react";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <div>
      <header className="header">
        <div className="container">
          <nav>
            <Link to="/">About Me</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/education">Education</Link>
          </nav>
          <div className="header__avatar">
            <img
              width={145}
              src={
                "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png"
              }
              alt=""
            />
            <div className="header__info">
              <h4>Designer / Developer</h4>
              <h1>Matt McDonald</h1>
              <button>Contact Me</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
