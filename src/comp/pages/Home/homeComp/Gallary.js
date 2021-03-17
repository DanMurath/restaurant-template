import HomeText from "./HomeText";

const Gallary = () => {
  return (
    <div className="gallary centerText" style={{ padding: "0 3%" }}>
      <h4>{HomeText.clients.our}</h4>
      <h1 style={{ paddingBottom: "3rem" }}>{HomeText.gallary.title}</h1>
      <div
        className="img"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "15rem 15rem 15rem",
          gridGap: "0.7rem",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1511017049469-e0d1ba0219a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          alt=""
          className="imgGal"
          style={{
            gridArea: "i1",
          }}
        />
        <img
          src="https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          alt=""
          className="imgGal"
          style={{ gridArea: "i2" }}
        />
        <img
          src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80"
          alt=""
          className="imgGal"
          style={{ gridArea: "i3" }}
        />
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          alt=""
          className="imgGal"
          style={{ gridArea: "i4" }}
        />
        <img
          src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          alt=""
          className="imgGal"
          style={{ gridArea: "i5" }}
        />
        <img
          src="https://images.unsplash.com/photo-1558174906-f224b2599f7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80"
          alt=""
          className="imgGal"
          style={{ gridArea: "i6" }}
        />
      </div>
    </div>
  );
};

export default Gallary;
