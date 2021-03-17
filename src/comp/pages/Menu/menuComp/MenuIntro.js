import MenuText from "./MenuText";

const MenuIntro = () => {
  return (
    <div
      className="menuIntro centerText centerItems"
      style={{ height: "90vh", zIndex: "10" }}
    >
      <div className="titles">
        <h4>{MenuText.intro.great}</h4>
        <h1>{MenuText.intro.title}</h1>
      </div>
    </div>
  );
};

export default MenuIntro;
