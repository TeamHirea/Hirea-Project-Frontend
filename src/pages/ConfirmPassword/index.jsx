// import React from "react";
import logo from "../../assets/images/hirea white.png";
import "./index.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SignupRecruiter() {
  const navigate = useNavigate();
  console.log(navigate);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="container-signup  mt-5 ">
      <div className=" container-auth ">
        <div className="row row-auth ">
          <div className="col-6 col-left-rec" style={{ height: "600px" }}>
            <img src={logo} alt="" className="logo-auth" />
            <h1 className="desc-left">
              Temukan developer berbakat & terbaik di berbagai bidang keahlian
            </h1>
          </div>
          <div className="col-6 col-right-rec col-right-cp h-100 ">
            <div
              className="auth-right auth-right-cp "
              //   style={{ margin: "130px 20px" }}
            >
              <p className="title-auth">Please login with your account</p>
              <p className="desc-auth">Lorem ipsum dolor sit amet.</p>

              <p className="label">Email</p>
              <input
                type="text"
                name="email"
                placeholder="Input Your Email"
                onChange={handleChangeForm}
              />

              <p className="label">Password</p>
              <input
                type="password"
                name="password"
                onChange={handleChangeForm}
                placeholder="Input Your Password"
              />

              <button
                type="button"
                className="btn w-100 btn-auth btn-warning text-white mt-5"
              >
                Masuk
              </button>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
