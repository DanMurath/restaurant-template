import ContactText from "./ContactText";
import { Reveal, Tween } from "react-gsap";

const ContactIntro = () => {
  return (
    <div
      className="intro contactInt centerItems"
      style={{
        height: "70vh",
        clipPath: "polygon(0 0, 100% 0, 100% 81%, 0 100%)",
        zIndex: "10",
        position: "relative",
      }}
    >
      <div className="titles centerText">
        <Reveal>
          <Tween from={{ opacity: 0 }} delay={0.2}>
            <h4>{ContactText.intro.preTitle}</h4>
          </Tween>
        </Reveal>
        <Reveal>
          <Tween from={{ opacity: 0 }} delay={0.6}>
            <h1>{ContactText.intro.title}</h1>
          </Tween>
        </Reveal>
      </div>
    </div>
  );
};

export default ContactIntro;
