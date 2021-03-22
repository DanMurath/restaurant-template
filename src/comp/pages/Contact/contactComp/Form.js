import ContactText from "./ContactText";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Form = () => {
  useEffect(() => {
    if (window.innerWidth > 993) {
      gsap.from(".formOne", {
        y: 180,
        scrollTrigger: {
          trigger: "formOne",
          start: "top 0%",
          end: "+=1900",
          scrub: true,
        },
      });

      gsap.from(".formTwo", {
        y: -180,
        scrollTrigger: {
          trigger: "formTwo",
          start: "top 0%",
          end: "+=1900",
          scrub: true,
        },
      });
    }
  }, []);

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
        position: "relative",
        zIndex: "20",
      }}
    >
      <div
        className="container formOne"
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

      <div className="text formTwo" style={{ color: "#000" }}>
        <h1>{ContactText.form.titleOne}</h1>
        <div className="at connect">
          <i className="fas fa-envelope"></i>
          <p>{ContactText.form.at}</p>
        </div>
        <div className="phone connect">
          <i className="fas fa-phone"></i>
          <p>{ContactText.form.num}</p>
        </div>
        <h1>{ContactText.form.titleTwo}</h1>
        <div className="socials">
          {socials.map((e) => {
            return <i className={e.icon}></i>;
          })}
        </div>
        <h1>{ContactText.form.titleThr}</h1>
        <div className="add connect">
          <i className="fas fa-location-arrow"></i>
          <div className="addText">
            <p>Queen Street, Cardiff</p>
            <p>Wales, CF23 7CG</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
