import HomeText from "./HomeText";
import { Reveal, Tween } from "react-gsap";

const Overview = () => {
  return (
    <div className="overview centerText">
      <div className="quality metric shadow">
        <Reveal>
          <Tween from={{ opacity: 0 }}>
            <div className="contents">
              <h1>{HomeText.overview.title}</h1>
              <p className="pSpace">{HomeText.overview.text}</p>
              <button>{HomeText.overview.menu}</button>
            </div>
          </Tween>
        </Reveal>
      </div>

      <div className="experience metric shadow">
        <Reveal>
          <Tween from={{ opacity: 0 }} delay={0.2}>
            <div className="contents">
              <h1>{HomeText.overview.titleTwo}</h1>
              <p className="pSpace">{HomeText.overview.textTwo}</p>
              <button>{HomeText.overview.story}</button>
            </div>
          </Tween>
        </Reveal>
      </div>

      <div className="delivery metric shadow">
        <Reveal>
          <Tween from={{ opacity: 0 }} delay={0.4}>
            <div className="contents">
              <h1>{HomeText.overview.titleThree}</h1>
              <p className="pSpace">{HomeText.overview.textThree}</p>
              <button>{HomeText.intro.order}</button>
            </div>
          </Tween>
        </Reveal>
      </div>
    </div>
  );
};

export default Overview;
