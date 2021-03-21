import HomeText from "./HomeText";
import { Reveal, Tween } from "react-gsap";

const Intro = () => {
  return (
    <div
      className="intro centerText centerItemsH"
      style={{
        height: "100vh",
      }}
    >
      <div className="title">
        <Reveal>
          <Tween from={{ opacity: 0 }} delay={0.2}>
            <h1>{HomeText.intro.title}</h1>
          </Tween>
        </Reveal>

        <Reveal>
          <Tween from={{ opacity: 0 }} delay={0.35}>
            <p
              style={{
                fontSize: "17px",
                padding: "1.3rem 20%",
              }}
            >
              {HomeText.intro.text}
            </p>
          </Tween>
        </Reveal>
        <Reveal>
          <Tween from={{ opacity: 0 }} delay={0.5}>
            <button
              style={{
                marginTop: "0.35rem",
              }}
            >
              {HomeText.intro.order}
            </button>
          </Tween>
        </Reveal>
      </div>
    </div>
  );
};

export default Intro;
