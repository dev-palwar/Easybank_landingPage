import React from "react";
import logo from "../Assets/logo.svg";
import { BsFacebook, BsYoutube, BsInstagram, BsTwitter, BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="boxes container"  >
          <div className="socials">
            <img src="https://codercoder-easybank.pages.dev/images/logo-dark.svg" alt="Easy bank" />
            <div className="handles">
                <a href=""><BsFacebook/></a>
                <a href=""><BsYoutube/></a>
                <a href=""><BsTwitter/></a>
                <a href=""><BsInstagram/></a>
                <a href=""><BsPinterest/></a>
            </div>
          </div>
          <div className="boxx">
            <a href="/">About us</a>
            <a href="/">Blog</a>
            <a href="/">Contact</a>
          </div>
          <div className="boxx">
            <a href="/">Careers</a>
            <a href="/">Support</a>
            <a href="/">Privacy Policy</a>
          </div>
          <div className="gap"></div>
          <div className="boxs">
            <button>Request Invite</button>
            <p>Easybank. All rights reserved.</p>
          </div>
        </div>
        <p>Challenge by Frontend Mentor. Coded by Dev Palwar. </p>
      </footer>
    </>
  );
};

export default Footer;
