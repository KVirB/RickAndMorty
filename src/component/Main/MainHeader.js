import "../../App.css";
import React from "react";
import { ReactComponent as Logo } from "../../pictures/logo.svg";
import { Link } from "react-router-dom";

function MainHeader() {
  return (
    <div className="Main">
      <header>
        <div className="header">
          <nav className="header_nav">
            <Link className="header_a" to="/rick_and_morty/main">
              <Logo className="logo"></Logo>
            </Link>
            <ul className="header_ul">
              <li>
                <Link
                  className="header_li_link"
                  to="/rick_and_morty/characters"
                >
                  Characters
                </Link>
              </li>
              <li>
                <Link className="header_li_link" to="/rick_and_morty/locations">
                  Locations
                </Link>
              </li>
              <li>
                <Link className="header_li_link" to="/rick_and_morty/episodes">
                  Episodes
                </Link>
              </li>
              <li>
                <div className="header_li_contacts_div">
                  <Link
                    target="_blank"
                    className="header_li_link_contacts"
                    to="https://vk.com/kvirb"
                  >
                    Contacts
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default MainHeader;
