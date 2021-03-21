import { useEffect } from "react";
import MenuIntro from "./menuComp/MenuIntro";
import Menus from "./menuComp/Menus";
const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="menu"
      style={{
        background: "linear-gradient(93deg, #333 35%, #222 63%)",
      }}
    >
      <MenuIntro />
      <Menus />
    </div>
  );
};

export default Menu;
