import HomeText from "./HomeText";
import { useEffect } from "react";
import { gsap } from "gsap";
import { Reveal, Tween } from "react-gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Clients = () => {
  const cli = [
    {
      id: 1,
      icon: "fas fa-quote-right",
      text: `The food was absolutely wonderful, from preparation to presentation, very pleasing. We especially enjoyed the special bar drinks, the cucumber/cilantro infused vodka martini and the K&P was great.`,
      name: "SELENA D",
      job: "LAWYER",
    },
    {
      id: 2,
      icon: "fas fa-quote-right",
      text: `The food was absolutely wonderful, from preparation to presentation, very pleasing. We especially enjoyed the special bar drinks, the cucumber/cilantro infused vodka martini and the K&P was great.`,
      name: "RICHARD",
      job: "ARCHITECT",
    },
    {
      id: 3,
      icon: "fas fa-quote-right",
      text: `Excellent eating experience.. from walking in the door and being greeted by employee, seated and drink order taken, was maybe 5 minutes. Meal was served hot and excellent taste. Server was very friendly.`,
      name: "CYNTHIA",
      job: "DEVELOPER",
    },
  ];

  useEffect(() => {
    gsap.from(".cOne", {
      y: 80,
      opacity: 0,
      scrollTrigger: {
        trigger: ".cOne",
        start: "top 85%",
      },
    });

    gsap.from(".cTwo", {
      y: 80,
      opacity: 0,
      scrollTrigger: {
        trigger: ".cTwo",
        start: "top 85%",
      },
    });
  }, []);

  return (
    <div
      className="clients centerText centerItems"
      style={{
        background: "linear-gradient(93deg, #333 35%, #222 63%)",
      }}
    >
      <div className="titles cOne">
        <h4>{HomeText.clients.our}</h4>
        <h1>{HomeText.clients.title}</h1>
      </div>
      <div className="clientItems">
        {cli.map((c) => (
          <div
            className="clients-contain cTwo"
            style={{
              borderRadius: "14px",
              boxShadow: "0 0 10px rgb(0 0 0 / 40%)",
            }}
          >
            <i className={c.icon} style={{ fontSize: "28px" }}></i>
            <p
              style={{
                lineHeight: "2.1",
              }}
            >
              <em>{c.text}</em>
            </p>
            <h5>{c.name}</h5>
            <h6>{c.job}</h6>
          </div>
        ))}
      </div>
      <Reveal>
        <Tween from={{ opacity: 0 }} delay={0.1}>
          <button className="btnSpace">{HomeText.clients.read}</button>
        </Tween>
      </Reveal>
    </div>
  );
};

export default Clients;
