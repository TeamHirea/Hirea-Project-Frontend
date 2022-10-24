import React from "react";
import { useState } from "react";
import logo from "../../assets/vectors/logo-hirea.jpg";
import mail from "../../assets/vectors/mail.png";
import bell from "../../assets/vectors/bell.png";
// import bell from "../../assets/vectors/triangle.png";
import iconBlok from "../../assets/vectors/icon-blok.png";
import notifMsg from "../../assets/vectors/messageNotif.png";
import search from "../../assets/images/search2.png";
import user from "../../assets/images/user.png";
import bell__header from "../../assets/vectors/bell__header.png";
import wave from "../../assets/images/wave.png";
import noNotif from "../../assets/images/no_notification.png";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";

function Header() {
  const isLoggedin = localStorage.getItem("token");
  const [togglePopNotif, setTogglePopNotif] = useState(false);
  const [togglePopMsg, setTogglePopMsg] = useState(false);
  const [togglePopProfile, setTogglePopProfile] = useState(false);
  const [data] = useState([]);
  const role = localStorage.getItem("role");

  const navigate = useNavigate();

  const handleTogglePopNotif = (e) => {
    e.preventDefault();
    setTogglePopNotif(!togglePopNotif);
    if (!togglePopNotif) {
      setTogglePopMsg(false);
      setTogglePopProfile(false);
    }
  };

  const handleTogglePopProfile = (e) => {
    e.preventDefault();
    setTogglePopProfile(!togglePopProfile);
    if (!togglePopProfile) {
      setTogglePopMsg(false);
      setTogglePopNotif(false);
    }
  };

  const handleToggleMessage = (e) => {
    e.preventDefault();
    setTogglePopMsg(!togglePopMsg);
    if (!togglePopMsg) {
      setTogglePopProfile(false);
      setTogglePopNotif(false);
    }
  };

  const handleLogOut = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/logout");
      localStorage.clear();
      navigate("/");
      // eslint-disable-next-line no-empty
    } catch (error) {}
  };

  return (
    <>
      {isLoggedin ? (
        <>
          <nav
            className="container-fluid navbar header--container__height navbar-expand-lg navbar-light w-100 bg-white mobile__style fixed-top bg-white"
            // style={{ overflow: "hidden" }}
          >
            <div className="container h-100 header--container__mobile px-0">
              <img src={wave} className="w-100 header--wave" alt="" />
              <Link
                to={"/"}
                className=" w-75"
                style={{ textDecoration: "none" }}
              >
                <div className="navbar-brand">
                  <img
                    src={logo}
                    alt=""
                    className="mobile__none navbar__logo"
                    style={{ width: "6%" }}
                  />
                  <span className="navbar__title" style={{ color: "#5e50a1" }}>
                    Hirea
                  </span>
                </div>
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
                    <div
                      onClick={() => {
                        navigate("/inbox");
                      }}
                    >
                      <img src={mail} className="header--icon--lggedin__size" />
                    </div>
                    {/* {togglePopNotif && (
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
                              style={{
                                textAlign: "center",
                                fontSize: "0.8rem",
                              }}
                            >
                              Belum ada Notifikasi
                            </p>
                          </>
                        )}
                      </div>
                    )} */}
                  </li>
                  <li className="nav-item" onClick={handleToggleMessage}>
                    <div>
                      <img src={bell} className="header--icon--lggedin__size" />
                    </div>
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
                                style={{
                                  textAlign: "center",
                                  fontSize: "0.8rem",
                                }}
                              >
                                Belum ada Notifikasi
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </li>
                  <li className="nav-item" onClick={handleTogglePopProfile}>
                    <div>
                      <img src={user} className="header--icon--lggedin__size" />
                    </div>
                    {togglePopProfile && (
                      <div
                        className="bg-white header--toggle--profile__popup d-flex justify-content-start align-items-start flex-column"
                        style={{ border: "1px solid black" }}
                      >
                        {/* <li  className="pt-2"> */}
                        <div
                          className="navbar--button"
                          onClick={() => {
                            if (role === "recruiter") {
                              return navigate("/home");
                            }
                            navigate("/");
                          }}
                        >
                          Home
                        </div>
                        <div
                          className="navbar--button"
                          onClick={() => {
                            if (role === "recruiter") {
                              return navigate("/recruiter/profile");
                            }
                            navigate("/profile");
                          }}
                        >
                          Profile
                        </div>
                        <div className="navbar--button" onClick={handleLogOut}>
                          Log Out
                        </div>
                        {/* </li> */}
                      </div>
                    )}
                  </li>
                </div>
              </div>
            </div>
          </nav>
          <div className="header--bottom--nav__container d-lg-none d-md-none p-0 pt-4 px-3">
            <ul
              style={{ listStyle: "none" }}
              className="d-flex justify-content-between align-items-start"
            >
              <li>
                <img src={iconBlok} alt="" />
              </li>
              <li>
                <img src={notifMsg} alt="" />
              </li>
              <li>
                <img src={search} alt="" />
              </li>
              <li>
                <img src={user} alt="" />
              </li>
            </ul>
          </div>
        </>
      ) : (
        <nav className="container-fluid navbar navbar-expand-lg navbar-light fixed-top bg-white">
          <div className="container">
            <Link to={"/"}>
              <div
                className="navbar-brand header--logo--image__size w-50"
                href="#"
              >
                <img src={logo} alt="" className="" style={{ width: "10%" }} />
              </div>
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
                <Link to="/optionLogin">
                  <button className="btn mx-auto">Masuk</button>
                </Link>
                <Link to="/optionRegister">
                  <button className="btn mx-auto btn-danger">Daftar</button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Header;
