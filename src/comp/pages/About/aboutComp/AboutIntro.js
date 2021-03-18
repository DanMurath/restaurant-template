import AboutText from "./AboutText";

const AboutIntro = () => {
  return (
    <div className="aboutIntro centerItems" style={{ height: "70vh" }}>
      <div className="title centerText">
        <h1>{AboutText.intro.fir}</h1>
        <h1>{AboutText.intro.sec}</h1>
        <h1>{AboutText.intro.thr}</h1>
      </div>
    </div>
  );
};

export default AboutIntro;
