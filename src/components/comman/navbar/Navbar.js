import React, { useState } from "react";
import "./Navbar.css";
import { Link, to } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState("");
  const [desktopMenu, setdesktopMenu] = useState({
    overlay: "",
    set: "hide",
    desktop: "",
  });
  const [search, setSearch] = useState({ nav: "", set: "", mobile: "" });
  const mobileClick = () => {
    if (menu === "") {
      setMenu("active");
    } else setMenu("");
  };

  const desktopClick = () => {
    if (desktopMenu.overlay === "") {
      setdesktopMenu({ overlay: "show", set: "", desktop: "hide" });
    } else setdesktopMenu({ overlay: "", set: "hide", desktop: "" });
  };

  const onsearch = () => {
    if (search.nav === "") {
      setSearch({ nav: "move-up", set: "active", mobile: "move-down" });
    } else setSearch({ nav: "", set: "", mobile: "" });
  };

  return (
    <>
      <div className={`nav-container ${menu}`}>
        <nav className={`${search.nav}`}>
          <ul className="mobile-nav p-0">
            <li>
              <div className="menu-icon-container" onClick={mobileClick}>
                <div className="menu-icon">
                  <span className="line-1"></span>
                  <span className="line-2"></span>
                </div>
              </div>
            </li>

            <li>
              <Link to="/" className="link-logo"></Link>
            </li>

            <li>
              <Link to="" className="link-bag"></Link>
            </li>
          </ul>

          <ul className={`desktop-nav ${desktopMenu.desktop} ${search.mobile}`}>
            <li>
              <Link to="/" className="link-logo"></Link>
            </li>
            <li>
              <Link to="/imac">Mac</Link>
            </li>
            <li>
              <Link to="/ipad">iPad</Link>
            </li>
            <li>
              <Link to="/iphone">iPhone</Link>
            </li>
            <li>
              <Link to="/iwatch">Watch</Link>
            </li>
            <li>
              <Link to="/itv">TV</Link>
            </li>
            <li>
              <Link to="/music">Music</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
            <li>
              <Link
                onClick={desktopClick}
                to="#"
                className="link-search"
              ></Link>
            </li>

            <li className="bag">
              <Link to="/" className="link-bag" />
            </li>
          </ul>
        </nav>

        <div className={`search-container ${desktopMenu.set}`}>
          <div className="link-search"></div>
          <div className={`search-bar`}>
            <form action="">
              <input
                onClick={onsearch}
                type="text"
                placeholder="Search apple.com"
              />
            </form>
          </div>
          <div className="link-close" onClick={desktopClick}></div>

          <div className="quick-links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to="/">Visiting an Apple Store FAQ</Link>
              </li>
              <li>
                <Link to="/">Shop Apple Store Online</Link>
              </li>
              <li>
                <Link to="/">Accessories</Link>
              </li>
              <li>
                <Link to="/">AirPods</Link>
              </li>
              <li>
                <Link to="/">AirTag</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mobile-search-container">
          <div className="link-search"></div>
          <div className={`search-bar  ${search.set}`}>
            <form action="" onClick={onsearch}>
              <input type="text" placeholder="Search apple.com" />
            </form>
          </div>
          <span className="cancel-btn" onClick={onsearch}>
            Cancel
          </span>

          <div className="quick-links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to="/">Visiting an Apple Store FAQ</Link>
              </li>
              <li>
                <Link to="/">Shop Apple Store Online</Link>
              </li>
              <li>
                <Link to="/">Accessories</Link>
              </li>
              <li>
                <Link to="/">AirPods</Link>
              </li>
              <li>
                <Link to="/">AirTag</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`overlay ${desktopMenu.overlay}`}></div>
    </>
  );
}

export default Navbar;
