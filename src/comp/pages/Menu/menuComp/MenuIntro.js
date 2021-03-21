import MenuText from "./MenuText";
import { Reveal, Tween } from "react-gsap";

const MenuIntro = () => {
  return (
    <div
      className="menuIntro centerText centerItems"
      style={{ height: "90vh", zIndex: "10", position: "relative" }}
    >
      <div className="titles">
        <Reveal>
          <Tween from={{ opacity: 0 }} delay={0.2}>
            <h4>{MenuText.intro.great}</h4>
          </Tween>
        </Reveal>
        <Reveal>
          <Tween from={{ opacity: 0 }} delay={0.4}>
            <h1>{MenuText.intro.title}</h1>
          </Tween>
        </Reveal>
      </div>
    </div>
  );
};

export default MenuIntro;
