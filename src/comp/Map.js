const Map = () => {
  const map = {
    find: "FIND US",
    title: "OUR ADDRESS",
    icon: "fas fa-location-arrow",
    address: "Queen Street, Cardiff",
    addressTwo: "Wales, CF23 7CG",
  };

  return (
    <div
      className="map centerItemsH"
      style={{
        marginTop: "15rem",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="card mOne"
        style={{
          background: "linear-gradient(#222, #000)",
          padding: "3rem 2rem",
          borderRadius: "8px",
          width: "90%",
          maxWidth: "600px",
          position: "relative",
        }}
      >
        <div className="titles centerText" style={{ paddingBottom: "1.2rem" }}>
          <h4 style={{ paddingTop: "0" }}>{map.find}</h4>
          <h1>{map.title}</h1>
        </div>
        <div className="address centerItemsH">
          <i
            className={map.icon}
            style={{
              position: "relative",
              //we can make this a seperate div to position better
              transform: "translateX(-2rem)",
            }}
          ></i>
          <p>{map.address}</p>
          <br />
        </div>
        <p className="centerText" style={{ padding: "0" }}>
          {map.addressTwo}
        </p>
      </div>
    </div>
  );
};

export default Map;
