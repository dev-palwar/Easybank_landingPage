import React, { useState } from "react";
import logo from "../Assets/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showMenu = () => {
    if (visible === false) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  return (
    <>
      <nav>
        <img src={logo} alt="" />
        <ul>
          <a href="">Home</a>

          <a href="">About</a>

          <a href="">Blog</a>

          <a href="">Contact</a>

          <a href="">careers</a>
        </ul>
        <button>Request Links</button>
        <div className="mobileMenu">
          <AiOutlineMenu onClick={showMenu} />
        </div>
      </nav>
      {visible === true ? (
        <Mobile_menu display="block" />
      ) : (
        <Mobile_menu display="none" />
      )}
    </>
  );
};

const Mobile_menu = ({ display }) => {
  let mobdisplay = display;
  return (
    <>
      <div className="mobile_Menu" style={{ display: mobdisplay }}>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">careers</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
