import HomeText from "./HomeText";

const Overview = () => {
  return (
    <div className="overview centerText">
      <div className="quality metric shadow">
        <div className="contents">
          <h1>{HomeText.overview.title}</h1>
          <p className="pSpace">{HomeText.overview.text}</p>
          <button>{HomeText.overview.menu}</button>
        </div>
      </div>

      <div className="experience metric shadow">
        <div className="contents">
          <h1>{HomeText.overview.titleTwo}</h1>
          <p className="pSpace">{HomeText.overview.textTwo}</p>
          <button>{HomeText.overview.story}</button>
        </div>
      </div>

      <div className="delivery metric shadow">
        <div className="contents">
          <h1>{HomeText.overview.titleThree}</h1>
          <p className="pSpace">{HomeText.overview.textThree}</p>
          <button>{HomeText.intro.order}</button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
