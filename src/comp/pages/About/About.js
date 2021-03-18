import AboutIntro from "./aboutComp/AboutIntro";
import Explained from "./aboutComp/Explained";
import Showcase from "./aboutComp/Showcase";
import Team from "./aboutComp/Team";

const About = () => {
  return (
    <div className="about">
      <AboutIntro />
      <Explained />
      <Showcase />
      <Team />
    </div>
  );
};

export default About;
