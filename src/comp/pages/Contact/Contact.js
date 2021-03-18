import ContactIntro from "./contactComp/ContactIntro";
import Form from "./contactComp/Form";

const Contact = () => {
  return (
    <div className="contact" style={{ background: "#ffd71b" }}>
      <ContactIntro />
      <Form />
    </div>
  );
};

export default Contact;
