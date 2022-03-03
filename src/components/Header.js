import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const managePane = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Header">
      <nav
        className="navbar has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className={isOpen ? "navbar-brand is-active" : "navbar-brand"}>
          <NavLink className="navbar-item" to="/">
            <h1 className="title">𝐍𝐈𝐂-𝐓𝐨𝐨𝐥𝐬</h1>
          </NavLink>
          <a
            role="button"
            className={isOpen ? "navbar-burger is-active" : "navbar-burger"}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            href="#"
            onClick={managePane}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasic"
          className={isOpen ? "navbar-menu is-active" : "navbar-menu"}
        >
          <div className="navbar-start">
            <NavLink
              id="t-1"
              className="navbar-item"
              to="/nic-info"
              onClick={managePane}
            >
              NIC Info
            </NavLink>

            <NavLink
              id="t-2"
              className="navbar-item"
              to="/nic-generate"
              onClick={managePane}
            >
              Generate NIC
            </NavLink>
          </div>

          <div className="navbar-end">
            <a
              id="t-3"
              className="navbar-item"
              href="https://github.com/dilshan-h/nic-tools/"
              rel="noopener noreferrer"
              target="_blank"
              onClick={managePane}
            >
              <span className="icon-text">
                <span className="icon">
                  <ion-icon name="logo-github" size="large"></ion-icon>
                </span>
                <b>View on GitHub</b>
              </span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
