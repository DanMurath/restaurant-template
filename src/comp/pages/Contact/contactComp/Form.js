import ContactText from "./ContactText";

const Form = () => {
  const socials = [
    { id: 1, icon: "fab fa-facebook-f" },
    { id: 2, icon: "fab fa-twitter" },
    { id: 3, icon: "fab fa-instagram" },
    { id: 4, icon: "fab fa-snapchat-ghost" },
    { id: 5, icon: "fab fa-youtube" },
  ];

  return (
    <div
      className="form"
      style={{
        //      background: "#ffd71b",
        height: "80vh",
        position: "relative",
        zIndex: "20",
      }}
    >
      <div
        className="container"
        style={{
          background: "#000",
          width: "80%",
          maxWidth: "590px",
          borderRadius: "4px",
        }}
      >
        <form className="centerItems">
          <input
            className="input"
            type="text"
            placeholder={ContactText.form.name}
          />
          <input
            className="input"
            type="email"
            placeholder={ContactText.form.email}
          />
          <textarea
            style={{ resize: "none" }}
            className="input"
            id="textarea"
            placeholder={ContactText.form.msg}
          />
          <button>SUBMIT</button>
        </form>
      </div>

      <div className="text" style={{ color: "#000" }}>
        <h1>{ContactText.form.titleOne}</h1>
        <p>{ContactText.form.at}</p>
        <p>{ContactText.form.num}</p>
        <h1>{ContactText.form.titleTwo}</h1>
        <div className="socials">
          {socials.map((e) => {
            return <i className={e.icon}></i>;
          })}
        </div>
        <h1>{ContactText.form.titleThr}</h1>
      </div>
    </div>
  );
};

export default Form;
