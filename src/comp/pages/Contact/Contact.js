import { useEffect } from "react";
import ContactIntro from "./contactComp/ContactIntro";
import Form from "./contactComp/Form";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact" style={{ background: "#ffd71b" }}>
      <ContactIntro />
      <Form />
    </div>
  );
};

export default Contact;
