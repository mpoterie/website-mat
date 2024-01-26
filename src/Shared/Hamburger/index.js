import { Link } from "react-router-dom";

export default function Hamburger({ isOpen, links }) {
  return (
    <>
      <div
        className={
          isOpen
            ? "hamburger-menu-container"
            : "hamburger-menu-container-closed"
        }
      >
        <div className="hamburger-titles-container">
          {links.map(({ to, title }, key) => {
            return (
              <div key={key} className="hamburger-title-container">
                <Link to={to} className="title-2">
                  {title}
                </Link>
              </div>
            );
          })}

          <div className="hamburger-title-container">
            <Link
              to="https://www.instagram.com/mathieupoterie/"
              target="_blank"
              className="title-2"
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={
          isOpen ? `hamburger hamburger-closing` : `hamburger hamburger-opening`
        }
      >
        <div
          className={
            isOpen ? `burger burger1-opened` : "burger burger-1-closed"
          }
        />
        <div
          className={
            isOpen ? `burger burger2-opened` : "burger burger-2-closed"
          }
        />{" "}
        <div
          className={
            isOpen ? `burger burger3-opened` : "burger burger-3-closed"
          }
        />
      </div>
    </>
  );
}
