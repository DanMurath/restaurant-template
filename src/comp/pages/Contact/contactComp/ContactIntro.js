import ContactText from "./ContactText";

const ContactIntro = () => {
  return (
    <div
      className="intro contactInt centerItems"
      style={{
        height: "70vh",
        clipPath: "polygon(0 0, 100% 0, 100% 81%, 0 100%)",
        zIndex: "10",
        position: "relative",
      }}
    >
      <div className="titles centerText">
        <h4>{ContactText.intro.preTitle}</h4>
        <h1>{ContactText.intro.title}</h1>
      </div>
    </div>
  );
};

export default ContactIntro;
