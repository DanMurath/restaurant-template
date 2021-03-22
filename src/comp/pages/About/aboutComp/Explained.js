import AboutText from "./AboutText";
import { Reveal, Tween } from "react-gsap";

const Explained = () => {
  return (
    <div
      className="explained"
      style={{
        maxWidth: "1100px",
      }}
    >
      <Reveal>
        <Tween from={{ opacity: 0 }} delay={1.1}>
          <div className="titles">
            <h4>{AboutText.exp.about}</h4>
            <h1>{AboutText.exp.title}</h1>
          </div>
          <p>{AboutText.exp.text}</p>
          <p>{AboutText.exp.textTwo}</p>
        </Tween>
      </Reveal>
    </div>
  );
};

export default Explained;
