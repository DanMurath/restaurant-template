import AboutText from "./AboutText";

const Team = () => {
  const team = [
    // add img to these
    { id: 1, name: "ALEN PARKER", job: "CHEF" },
    { id: 2, name: "ALEN PARKER", job: "CHEF" },
    { id: 3, name: "ALEN PARKER", job: "CHEF" },
    { id: 4, name: "ALEN PARKER", job: "CHEF" },
  ];

  return (
    <div
      className="team centerText"
      style={{
        background: "#111",
        padding: "3rem 0",
      }}
    >
      <div className="titles" style={{ padding: "3rem 0" }}>
        <h4>{AboutText.team.preTitle}</h4>
        <h1>{AboutText.team.title}</h1>
      </div>
      <div className="players">
        {team.map((e) => {
          return (
            <div
              className="card"
              style={{
                display: "inline-block",
                width: "85%",
                maxWidth: "300px",
                background: "#000",
                margin: "1rem",
                borderBottom: "1px solid #ffd71b",
              }}
            >
              <img
                style={{ width: "100%" }}
                src="https://paulallen.ca/wp-content/uploads/2016/11/business-man.png"
                alt=""
              />
              <h1
                style={{
                  paddingTop: "1rem",
                  fontSize: "22px",
                }}
              >
                {e.name}
              </h1>
              <h4
                style={{
                  paddingTop: ".3rem",
                  fontSize: "18px",
                }}
              >
                {e.job}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
