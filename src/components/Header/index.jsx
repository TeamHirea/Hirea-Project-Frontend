import React from "react";
import { useState } from "react";
import logo from "../../assets/vectors/hirea.png";
import mail from "../../assets/vectors/mail.png";
import bell from "../../assets/vectors/bell.png";
// import bell from "../../assets/vectors/triangle.png";
import user from "../../assets/images/user.png";
import bell__header from "../../assets/vectors/bell__header.png";
import wave from "../../assets/images/wave.png";
import noNotif from "../../assets/images/no_notification.png";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  const [isLoggedin] = useState(true);
  const [togglePopNotif, setTogglePopNotif] = useState(false);
  const [togglePopMsg, setTogglePopMsg] = useState(false);
  const [data] = useState([]);

  const handleTogglePopNotif = (e) => {
    e.preventDefault();
    setTogglePopNotif(!togglePopNotif);
    if (!togglePopNotif) {
      setTogglePopMsg(false);
    }
  };

  const handleToggleMessage = (e) => {
    e.preventDefault();
    setTogglePopMsg(!togglePopMsg);
    if (!togglePopMsg) {
      setTogglePopNotif(false);
    }
  };

  return (
    <>
      {isLoggedin ? (
        <nav className="container navbar navbar-expand-lg navbar-light bg-white mobile__style fixed-top bg-white">
          <img src={wave} className="w-100 header--wave" alt="" />
          <Link to={"/"} className=" w-75">
            <a className="navbar-brand   w-75" href="#">
              <img
                src={logo}
                alt=""
                className="mobile__none"
                style={{ width: "10%" }}
              />
            </a>
          </Link>
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
                  <div className="header--image--popup__size bg-white p-5">
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
                  // <img />
                  <div className="header--image--popup__container">
                    <div className="header--image--popup__size bg-white p-5">
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
        <nav className="container navbar navbar-expand-lg navbar-light fixed-top bg-white">
          <Link to={"/"}>
            <a className="navbar-brand header--logo--image__size w-50" href="#">
              <img src={logo} alt="" className="" style={{ width: "10%" }} />
            </a>
          </Link>
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
