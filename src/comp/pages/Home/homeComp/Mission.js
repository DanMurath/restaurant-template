import HomeText from "./HomeText";

const Mission = () => {
  return (
    <div className="mission">
      <div
        className="txt"
        style={{
          display: "inline-block",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <h4>{HomeText.mission.why}</h4>
        <h1>{HomeText.mission.title}</h1>
        <p>{HomeText.mission.text}</p>
        <p>{HomeText.mission.textTwo}</p>
      </div>
      <div
        className="img"
        style={{
          display: "inline-block",
          width: "100%",
          maxWidth: "420px",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1546070397-5e4f1d92c204?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
    </div>
  );
};

export default Mission;
