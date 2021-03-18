import AboutText from "./AboutText";

const Explained = () => {
  return (
    <div
      className="explained"
      style={{
        maxWidth: "1100px",
      }}
    >
      <div className="titles">
        <h4>{AboutText.exp.about}</h4>
        <h1>{AboutText.exp.title}</h1>
      </div>
      <p>{AboutText.exp.text}</p>
      <p>{AboutText.exp.textTwo}</p>
    </div>
  );
};

export default Explained;
