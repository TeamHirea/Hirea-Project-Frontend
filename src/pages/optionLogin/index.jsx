import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import logo from "../../assets/images/hirea white.png";
import "./index.css";
// import logoMobile from "../../assets/images/logo.png";

const OptionLogin = () => {
  return (
    <div className="container-fluid signinRecruiter--container">
      <div className="row px-0 mx-0">
        <div className="col-12">
          <div className="container">
            <div className="row p-4 signinRecruiter--page__container">
              <div className="col-lg-6 signinRecruiter--page--first__container">
                <img src={logo} style={{ width: "15%" }} className="" alt="" />
                <div className="signinRecruiter--content__container">
                  <p className="signinRecruiter--content__style px-4">
                    Temukan developer berbakat & terbaik di berbagai bidang
                    keahlian
                  </p>
                </div>
              </div>
              <div className="col-lg-6 signinRecruiter--page--second--form__container d-flex flex-column">
                <Link
                  to="/signin/jobseeker"
                  className="w-100"
                  style={{ textDecoration: "none", color: "red" }}
                >
                  <button
                    className="btn btn-white text-danger w-100"
                    style={{ border: "1px solid black" }}
                  >
                    Masuk Sebagai Pekerja
                  </button>
                </Link>
                <p className="atau-ajah">atau</p>
                <Link
                  to="/signin/recruiter"
                  className="w-100"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <button
                    className="btn w-100 text-white"
                    style={{ background: "#5E50A1" }}
                  >
                    Masuk Sebagai Recruiter
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionLogin;
