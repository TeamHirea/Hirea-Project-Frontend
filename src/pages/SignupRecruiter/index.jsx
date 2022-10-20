// import React from "react";
import logo from "../../assets/images/logo.png";
import "./index.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SignupRecruiter() {
  const navigate = useNavigate();
  console.log(navigate);
  const [form, setForm] = useState({
    name: "",
    email: "",
    companyName: "",
    companyField: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="container-signup py-0">
      <div className=" container-auth ">
        <div className="row row-auth ">
          <div className="col-6 col-left-rec">
            <img src={logo} alt="" className="logo-auth" />
            <h1 className="desc-left">
              Temukan developer berbakat & terbaik di berbagai bidang keahlian
            </h1>
          </div>
          <div className="col-6 col-right-rec ">
            <div className="auth-right ">
              <p className="title-auth"> Halo, Pewpeople</p>
              <p className="desc-auth">Lorem ipsum dolor sit amet.</p>
              <p className="label">Name</p>
              <input
                type="text"
                name="name"
                placeholder="Input Your Name"
                onChange={handleChangeForm}
              />
              <p className="label">Email</p>
              <input
                type="text"
                name="email"
                placeholder="Input Your Email"
                onChange={handleChangeForm}
              />
              <p className="label">Company</p>
              <input
                type="text"
                name="companyName"
                placeholder="Input Your Company Name"
                onChange={handleChangeForm}
              />
              <p className="label">Company Field</p>
              <input
                type="text"
                name="companyField"
                placeholder="Input Your Company Field"
                onChange={handleChangeForm}
              />

              <p className="label">Phone Number</p>
              <input
                onChange={handleChangeForm}
                type="text"
                name="phone"
                placeholder="Input your phone number"
              />
              <p className="label">Password</p>
              <input
                type="password"
                name="password"
                onChange={handleChangeForm}
                placeholder="Input Your Password"
              />
              <p className="label">Confirm Password</p>
              <input
                onChange={handleChangeForm}
                type="text"
                name="confirmPassword"
                placeholder="Input Your Confirm Password"
              />
              <p className="ask">Forgot Your Password?</p>
              <button
                type="button"
                className="btn w-100 btn-auth btn-warning text-white"
              >
                Masuk
              </button>
              <p className="footer-auth">
                Anda Belum Punya Akun? <a href="#">Daftar Disini</a>{" "}
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
