import HomeText from "./HomeText";
import { useEffect } from "react";
import { gsap } from "gsap";
import { Reveal, Tween } from "react-gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Explore = () => {
  const exp = [
    {
      id: 1,
      icon: "fas fa-utensils",
      title: "Always Fresh",
      text: `We focus on serving fresh food always. Fresh food is always best for your precious body and we keep that in mind and that's why we like to serve everything fresh`,
    },
    {
      id: 2,
      icon: "fas fa-utensils",
      title: "Amazing Taste",
      text:
        "Serving tasty food has always been our first priority and also to make sure the taste is constant everytime you consume, you will see no difference in taste",
    },
    {
      id: 3,
      icon: "fas fa-utensils",
      title: "Premium Ingredients",
      text: `We know great ingredients are must to take the taste and health on next level so that's why we focus on using oragnic ingredients so you don't have to worry`,
    },
  ];

  useEffect(() => {
    gsap.from(".eOne", {
      y: 80,
      opacity: 0,
      scrollTrigger: {
        trigger: ".eOne",
        start: "top 85%",
      },
    });

    gsap.from(".eTwo", {
      y: 80,
      opacity: 0,
      scrollTrigger: {
        trigger: ".eTwo",
        start: "top 87%",
      },
    });
  }, []);

  return (
    <div className="explore centerItems" style={{ padding: "6rem 2rem" }}>
      <div className="titles centerText eOne">
        <h4>{HomeText.explore.explore}</h4>
        <h1 style={{ paddingBottom: "3rem" }}>{HomeText.explore.title}</h1>
      </div>
      <div className="containers">
        {exp.map((e) => (
          <div
            className="container eTwo"
            style={{
              background: "#222222",
              padding: "3rem 1.3rem",
              borderRadius: "4px",
            }}
          >
            <i
              className={e.icon}
              style={{
                paddingBottom: "1.5rem",
                fontSize: "26px",
              }}
            ></i>
            <h2>{e.title}</h2>
            <p style={{ lineHeight: "1.9" }}>{e.text}</p>
          </div>
        ))}
      </div>
      <Reveal>
        <Tween from={{ opacity: 0 }} delay={0.1}>
          <button className="btnSpace">{HomeText.overview.menu}</button>
        </Tween>
      </Reveal>
    </div>
  );
};

export default Explore;
