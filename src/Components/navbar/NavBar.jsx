import React, { useEffect, useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";
import { useAuth } from "../../context/AuthContext";


const Menu = ({ closeMenu }) => (
  <>
    <p>
      <a href="#home" >
        Home
      </a>
    </p>
    <p>
      <a href="#wgpt3" >
        What is GPT3
      </a>
    </p>
    <p>
      <a href="#possibility">
        Open AI
      </a>
    </p>
    <p>
      <a href="#features">
        Case Studies
      </a>
    </p>
    <p>
      <a href="#blog">
        Library
      </a>
    </p>
  </>
);
const NavBar = () => {
  const { setAuthType,authType } = useAuth();
  const [toggleMenu, setToggleMenu] = useState(false);
  
  useEffect(() => {
    if (authType) {setToggleMenu(false)}
  }, [authType])
  
const handleMenuAuthClick = (type) => {
  setAuthType(type);
  setToggleMenu(false);
};

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="gpt3__navbar-links_container">
          <Menu closeMenu={() => {}} />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p onClick={() => setAuthType("signin")}>Sign in</p>
        <button onClick={() => setAuthType("signup")} type="button">
          Sign up
        </button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu closeMenu={() => setIsMenuOpen(false)} />
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p onClick={() => handleMenuAuthClick("signin")}>Sign in</p>
              <button onClick={() => handleMenuAuthClick("signup")} type="button">
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
