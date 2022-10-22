// import React from "react";
import logo from "../../assets/images/hirea white.png";
import "./index.css";
import React from "react";
import { useNavigate } from "react-router-dom";
export default function EmailActivation() {
  const navigate = useNavigate();
  console.log(navigate);

  return (
    <div>
      <div className="container-signup py-0">
        <div className=" container-auth ">
          <div className="row row-auth ">
            <div className="col-6 col-left-ea">
              <img src={logo} alt="" className="logo-auth" />
              <h1 className="desc-left">
                Temukan developer berbakat & terbaik di berbagai bidang keahlian
              </h1>
            </div>
            <div className="col-6 col-right-rec ">
              <div className="auth-right h-50 mb-5">
                <h1 style={{ marginTop: "200px" }}>
                  Succes Email Activation !!!
                </h1>
                <button
                  type="button"
                  className="btn w-100 btn-auth btn-warning text-white "
                  style={{ marginTop: "150px" }}
                >
                  Login
                </button>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
