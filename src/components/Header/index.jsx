import React from "react";
import { useState } from "react";
import logo from "../../assets/vectors/logo.png";
import mail from "../../assets/vectors/mail.png";
import bell from "../../assets/vectors/bell.png";
import user from "../../assets/images/user.png";
import "./header.css";

function Header() {
  const [isLoggedin] = useState(true);

  return (
    <>
      <nav className="container navbar navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div
            className="navbar-nav d-flex gap-3 header--button--nav--notLogin__style"
            style={{ marginLeft: "auto" }}
          >
            {isLoggedin ? (
              <>
                <button className="btn">Masuk</button>
                <button className="btn btn-danger">Daftar</button>
              </>
            ) : (
              <>
                <a href="">
                  <img src={bell} className="header--icon--lggedin__size" />
                </a>
                <a>
                  <img src={mail} className="header--icon--lggedin__size" />
                </a>
                <a>
                  <img src={user} className="header--icon--lggedin__size" />
                </a>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
