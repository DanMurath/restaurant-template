const Footer = () => {
  const footer = {
    home: "HOME",
    menu: "MENU",
    about: "ABOUT",
    contact: "CONTACT",
    facebook: "fab fa-facebook-f",
    twitter: "fab fa-twitter",
    insta: "fab fa-instagram",
    snap: "fab fa-snapchat-ghost",
    yt: "fab fa-youtube",
    copyright: `\u00A9 2021 RESTAURANT`,
    by: "BY DANIEL MURATHODZIC",
  };

  return (
    <div className="footer centerText" style={{ padding: "2rem 0" }}>
      <h3>{footer.home}</h3>
      <h3>{footer.menu}</h3>
      <h3>{footer.about}</h3>
      <h3>{footer.contact}</h3>
      <div className="socials">
        <i className={footer.facebook}></i>
        <i className={footer.twitter}></i>
        <i className={footer.insta}></i>
        <i className={footer.snap}></i>
        <i className={footer.yt}></i>
      </div>
      <p style={{ paddingBottom: "0" }}>{footer.copyright}</p>
      <p>{footer.by}</p>
    </div>
  );
};

export default Footer;
