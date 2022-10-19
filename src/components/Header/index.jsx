import React from "react";
import { useState } from "react";
import logo from "../../assets/vectors/logo.png";
import mail from "../../assets/vectors/mail.png";
import bell from "../../assets/vectors/bell.png";
import user from "../../assets/images/user.png";
import bell__header from "../../assets/vectors/bell__header.png";
import wave from "../../assets/images/wave.png";
import noNotif from "../../assets/images/no_notification.png";
import "./header.css";

function Header() {
  const [isLoggedin] = useState(false);
  const [togglePopNotif, setTogglePopNotif] = useState(false);
  const [togglePopMsg, setTogglePopMsg] = useState(false);
  const [data] = useState([]);

  const handleTogglePopNotif = (e) => {
    e.preventDefault();
    setTogglePopNotif(!togglePopNotif);
  };

  const handleToggleMessage = (e) => {
    e.preventDefault();
    setTogglePopMsg(!togglePopMsg);
  };

  return (
    <>
      {isLoggedin ? (
        <nav className="container navbar navbar-expand-lg navbar-light bg-white mobile__style">
          <img src={wave} className="w-100 header--wave" alt="" />
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          <div className="header--main__container d-lg-none">
            <div className="header--user--logeddin__container">
              <p>Sen, 21 April 2020</p>
              <h1>Hai, Mohammad !</h1>
            </div>
            <div className="header--container--bell__size">
              <div className="header--red--dot"></div>
              <img src={bell__header} className="header--icon" />
            </div>
          </div>
          <button
            className="navbar-toggler mobile__none"
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
              <li className="nav-item" onClick={handleTogglePopNotif}>
                <a href="">
                  <img src={mail} className="header--icon--lggedin__size" />
                </a>
                {togglePopNotif && (
                  <div className="header--image--popup__size p-5">
                    {data.length ? (
                      <>
                        <h1>test</h1>
                        <h1>test</h1>
                        <h1>test</h1>
                        <h1>test</h1>
                        <h1>test</h1>
                      </>
                    ) : (
                      <>
                        <img className="pt-4" src={noNotif} />
                        <p
                          className="mt-3"
                          style={{ textAlign: "center", fontSize: "0.8rem" }}
                        >
                          Belum ada Notifikasi
                        </p>
                      </>
                    )}
                  </div>
                )}
              </li>
              <li className="nav-item" onClick={handleToggleMessage}>
                <a href="">
                  <img src={bell} className="header--icon--lggedin__size" />
                </a>
                {togglePopMsg && (
                  <div className="header--image--popup__size p-5">
                    {data.length ? (
                      <>
                        <h1>test</h1>
                        <h1>test</h1>
                        <h1>test</h1>
                        <h1>test</h1>
                        <h1>test</h1>
                      </>
                    ) : (
                      <>
                        <img className="pt-4" src={noNotif} />
                        <p
                          className="mt-3"
                          style={{ textAlign: "center", fontSize: "0.8rem" }}
                        >
                          Belum ada Notifikasi
                        </p>
                      </>
                    )}
                  </div>
                )}
              </li>
              <li className="nav-item">
                <a>
                  <img src={user} className="header--icon--lggedin__size" />
                </a>
              </li>
            </div>
          </div>
        </nav>
      ) : (
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
              <button className="btn mx-auto">Masuk</button>
              <button className="btn mx-auto btn-danger">Daftar</button>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Header;
