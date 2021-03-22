import { useEffect, useState } from "react";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";

const Nav = () => {
  const [state, setState] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const click = () => {
    state === false ? setState(true) : setState(false);
  };

  let ee = new Audio("/ee.mp3");

  const clk = () => {
    ee.play();
  };

  const nav = {
    home: "HOME",
    menu: "MENU",
    about: "ABOUT",
    contact: "CONTACT",
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      let scroll = document.scrollingElement.scrollTop;
      if (scroll >= 3) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <div
      className="nav"
      style={{
        transition: "0.4s",
        backgroundColor: scrolled ? "rgba(0,0,0,0.7)" : "transparent",
        padding: "1.6rem",
        position: "fixed",
        width: "100%",
        zIndex: "10000",
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
          <i className="fas fa-crown" onClick={clk}></i>
        </div>
        <MediaQuery maxWidth={993}>
          <div className="menu" onClick={click}>
            <i className={state ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </MediaQuery>
        <ul className={state ? "navMenu active" : "navMenu"}>
          <Link to="/" onClick={click}>
            <li>{nav.home}</li>
          </Link>
          <Link to="/menu" onClick={click}>
            <li>{nav.menu}</li>
          </Link>
          <Link to="/about" onClick={click}>
            <li>{nav.about}</li>
          </Link>
          <Link to="/contact" onClick={click}>
            <li>{nav.contact}</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
