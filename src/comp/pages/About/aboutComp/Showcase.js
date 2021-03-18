import AboutText from "./AboutText";
import MediaQuery from "react-responsive";

const Showcase = () => {
  return (
    // I want to .map() data, however I cannot as i need to style seperately
    <div className="showcase">
      <div className="one">
        <img
          src="https://d33wubrfki0l68.cloudfront.net/d866d98fd3ac8352ab6334b07d7c7bb95f2bf92e/eae7d/assets/img/women-exp.jpg"
          alt=""
        />
        <div className="text tOne">
          <h5>{AboutText.showcase.preTitle}</h5>
          <hr className="yel" />
          <h2>{AboutText.showcase.title}</h2>
          <p>{AboutText.showcase.text}</p>
        </div>
      </div>

      <div className="two">
        {/* medias for the mobile view to make sense */}
        <MediaQuery maxWidth={993}>
          <img
            className="hide"
            src="https://d33wubrfki0l68.cloudfront.net/2f1480871809eefea719a641464e61e57d6146de/6a0bd/assets/img/happy-staff.jpg"
            alt=""
          />
        </MediaQuery>
        <div className="text">
          <h5>{AboutText.showcase.preTitle}</h5>
          <hr className="yel" />
          <h2>{AboutText.showcase.title}</h2>
          <p>{AboutText.showcase.text}</p>
        </div>
        <MediaQuery minWidth={993}>
          <img
            className="show"
            src="https://d33wubrfki0l68.cloudfront.net/2f1480871809eefea719a641464e61e57d6146de/6a0bd/assets/img/happy-staff.jpg"
            alt=""
          />
        </MediaQuery>
      </div>

      <div className="one">
        <img
          src="https://d33wubrfki0l68.cloudfront.net/5a7cc3460330e94c5b313a0a737570bbd7f39542/5d069/assets/img/friends.jpg"
          alt=""
        />
        <div className="text tOne">
          <h5>{AboutText.showcase.preTitle}</h5>
          <hr className="yel" />
          <h2>{AboutText.showcase.title}</h2>
          <p>{AboutText.showcase.text}</p>
        </div>
      </div>

      <div className="two">
        <MediaQuery maxWidth={993}>
          <img
            className="hide"
            src="https://d33wubrfki0l68.cloudfront.net/a366a3b2c4b2260aa165d525f8f9454c2cc134b2/9386e/assets/img/women-smiling.jpg"
            alt=""
          />
        </MediaQuery>
        <div className="text">
          <h5>{AboutText.showcase.preTitle}</h5>
          <hr className="yel" />
          <h2>{AboutText.showcase.title}</h2>
          <p>{AboutText.showcase.text}</p>
        </div>
        <MediaQuery minWidth={993}>
          <img
            className="show"
            src="https://d33wubrfki0l68.cloudfront.net/a366a3b2c4b2260aa165d525f8f9454c2cc134b2/9386e/assets/img/women-smiling.jpg"
            alt=""
          />
        </MediaQuery>
      </div>
    </div>
  );
};

export default Showcase;
