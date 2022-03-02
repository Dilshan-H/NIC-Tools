import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <nav
        className="navbar has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <NavLink className="navbar-item" to="/">
            <h1 className="title">𝐍𝐈𝐂-𝐓𝐨𝐨𝐥𝐬</h1>
          </NavLink>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            href="#"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasic" className="navbar-menu">
          <div className="navbar-start">
            <NavLink id="t-1" className="navbar-item" to="/nic-info">
              NIC Info
            </NavLink>

            <NavLink id="t-2" className="navbar-item" to="/nic-generate">
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
