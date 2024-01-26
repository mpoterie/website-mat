import { Link, useLocation } from "react-router-dom";
import Hamburger from "../Hamburger";
import { useState } from "react";

function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const links = [
    { to: "/", title: "About" },
    { to: "/music", title: "Music" },
    { to: "/dance", title: "Dance" },
    { to: "/Picture", title: "Picture" },
  ];

  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="header">
      <div className="site-title header-left">
        <Link to={"/"} className="title-link">
          Mathieu Poterie
        </Link>
      </div>
      <div className="header-right">
        <nav className="nav-wrapper">
          <ul className="navbar-nav mr-auto">
            {links.map(({ to, title }, key) => {
              const className = pathname === to ? "nav-link-active" : "";
              return (
                <li key={key} className={className}>
                  <Link to={to}>{title}</Link>
                </li>
              );
            })}
            <li>
              <Link
                to="https://www.instagram.com/mathieupoterie/"
                target="_blank"
                className="nav-link"
              >
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hamburger-container" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} links={links} />
        </div>
      </div>
    </div>
  );
}

export default Header;
