import { useState } from "react";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";

//TODO: figure out react media queryv
//      we can use max-width for other medias
//      finish navbar
//      finish off home page: no more than 2hrs
//      get menu page prototype done || to fully finished

const Nav = () => {
  const [state, setState] = useState(false);

  const click = () => {
    state === false ? setState(true) : setState(false);
  };

  const nav = {
    home: "HOME",
    menu: "MENU",
    about: "ABOUT",
    contact: "CONTACT",
  };

  return (
    <div
      className="nav"
      style={{
        backgroundColor: "transparent",
        padding: "1rem",
        position: "fixed",
        width: "100%",
      }}
    >
      <div
        className="nav-items"
        style={{
          color: "#fff",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div className="logo">
          <i className="fas fa-crown"></i>
        </div>
        <MediaQuery maxWidth={993}>
          <div className="menu" onClick={click}>
            <i className={state ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </MediaQuery>
        <ul className={state ? "navMenu active" : "navMenu"}>
          <Link to="/">
            <li>{nav.home}</li>
          </Link>
          <Link to="/menu">
            <li>{nav.menu}</li>
          </Link>
          <Link to="/about">
            <li>{nav.about}</li>
          </Link>
          <Link to="/contact">
            <li>{nav.contact}</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
