import { Reveal, Tween } from "react-gsap";

const Email = () => {
  const email = {
    icon: "fas fa-crown",
    text: "STAY UPDATED WITH DEALS",
    placeHolder: "Email Address",
    submit: "SUBMIT",
  };

  return (
    <div className="email centerItems" style={{ padding: "4rem 0" }}>
      <i className={email.icon} style={{ fontSize: "32px" }}></i>
      <p
        style={{
          padding: "1.8rem",
        }}
      >
        {email.text}
      </p>

      <form className="centerItems">
        <input
          type="email"
          placeholder={email.placeHolder}
          style={{
            background: "#000",
            border: "1px solid #fff",
            padding: "1rem",
            margin: "1rem 0",
          }} //TODO: make above style a class for input and button
        />
        <button type="submit">{email.submit}</button>
      </form>
    </div>
  );
};

export default Email;
