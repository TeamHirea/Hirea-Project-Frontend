import React, { useState } from "react";
import logo from "../../assets/images/hirea white.png";
import "./index.css";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();
  console.log(navigate);
  const [form, setForm] = useState({
    email: "",
  });
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container py-0 ">
        <div className="container-auth rounded-1">
          <div className="row-auth row">
            <div className="col-md-6 col-left">
              <img src={logo} alt="" className="logo-auth" />
              <h4 className="desc-left">
                Temukan developer berbakat & terbaik di berbagai bidang keahlian
              </h4>
            </div>
            <div className="col-md-6 col-right bg-white">
              <div className="auth-right ">
                <p className="title-auth"> Halo, Pewpeople</p>
                <p className="desc-auth">
                  Enter your user accounts verified email address and we will{" "}
                  <br />
                  send you a password reset link
                </p>
                <p className="label mt-3">Email</p>
                <input
                  type="text"
                  name="name"
                  placeholder="Input Your Email"
                  onChange={handleChangeForm}
                />

                <button
                  type="button"
                  className="btn w-100 btn-auth btn-warning text-white mt-3"
                >
                  Send to your email
                </button>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
