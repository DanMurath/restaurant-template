const Menus = () => {
  const menus = [
    { id: 1, title: "MENUS GO HERE" },
    { id: 2, title: "MENUS GO HERE" },
    { id: 3, title: "MENUS GO HERE" },
    { id: 4, title: "MENUS GO HERE" },
  ];

  const subMenus = [
    { id: 1, item: "ANYTHING", price: "£10", info: "Info" },
    { id: 2, item: "ANYTHING", price: "£10", info: "Info" },
    { id: 3, item: "ANYTHING", price: "£10", info: "Info" },
    { id: 4, item: "ANYTHING", price: "£10", info: "Info" },
    { id: 5, item: "ANYTHING", price: "£10", info: "Info" },
    { id: 6, item: "ANYTHING", price: "£10", info: "Info" },
  ];

  return (
    <div
      className="menus centerItems"
      style={{
        background: "linear-gradient(93deg, #333 35%, #222 63%)",
        position: "relative",
        transform: "translateY(-12rem)",
      }}
    >
      {menus.map((e) => {
        return (
          <div
            className="card"
            style={{
              background: "#000",
              width: "90%",
              maxWidth: "500px",
              display: "inline-block",
              margin: "1rem",
              zIndex: "100",
              position: "relative",
              transform: "translateY(12rem)",
              padding: "2rem",
            }}
          >
            <h1
              style={{
                color: "#ffd71b",
              }}
            >
              {e.title}
            </h1>
            {subMenus.map((e) => {
              return (
                <div
                  className="items"
                  style={{
                    margin: "1rem 0",
                    borderBottom: "1px dashed #fff",
                  }}
                >
                  <div
                    className="space"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <h5>{e.item}</h5>
                    <h5>{e.price}</h5>
                  </div>
                  <p>{e.info}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Menus;
