import Intro from "./homeComp/Intro";
import Mission from "./homeComp/Mission";
import Overview from "./homeComp/Overview";
import Explore from "./homeComp/Explore";
import Clients from "./homeComp/Clients";
import Gallary from "./homeComp/Gallary";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <Intro />
      <Mission />
      <Overview />
      <Explore />
      <Clients />
      <Gallary />
    </div>
  );
};

export default Home;
