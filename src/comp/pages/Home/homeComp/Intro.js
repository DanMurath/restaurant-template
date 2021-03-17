import HomeText from "./HomeText";

const Intro = () => {
  return (
    <div
      className="intro centerText centerItemsH"
      style={{
        height: "100vh",
      }}
    >
      <div className="title">
        <h1>{HomeText.intro.title}</h1>
        <p
          style={{
            fontSize: "17px",
            padding: "1.3rem 20%",
          }}
        >
          {HomeText.intro.text}
        </p>
        <button
          style={{
            marginTop: "0.35rem",
          }}
        >
          {HomeText.intro.order}
        </button>
      </div>
    </div>
  );
};

export default Intro;
