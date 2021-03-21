import AboutText from "./AboutText";
import { Reveal, Tween } from "react-gsap";

const AboutIntro = () => {
  return (
    <div className="aboutIntro centerItems" style={{ height: "70vh" }}>
      <div className="title centerText">
        <Reveal>
          <Tween from={{ opacity: 0 }} delay={0.2}>
            <h1>{AboutText.intro.fir}</h1>
          </Tween>
        </Reveal>
        <Reveal>
          <Tween from={{ opacity: 0 }} delay={0.6}>
            <h1>{AboutText.intro.sec}</h1>
          </Tween>
        </Reveal>
        <Reveal>
          <Tween from={{ opacity: 0 }} delay={1}>
            <h1>{AboutText.intro.thr}</h1>
          </Tween>
        </Reveal>
      </div>
    </div>
  );
};

export default AboutIntro;
