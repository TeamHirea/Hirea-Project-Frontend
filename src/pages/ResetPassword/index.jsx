import React, { useState } from "react";
import logo from "../../assets/images/hirea white.png";
import "./index.css";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const result = await axios.post("/api/auth/forgotPassword", form);
      setLoading(false);
      alert(result.data.message);
      navigate("/reset/send/success");
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }
  };
  return (
    <div>
      <div className="container py-0 ">
        <div className="container-auth rounded-1">
          <div className="row-auth row">
            <div className="col-md-6 col-left">
              <img
                src={logo}
                style={{ width: "15%", cursor: "pointer" }}
                onClick={() => {
                  navigate("/");
                }}
                className="logo-auth"
              />
              <h4 className="desc-left">
                Temukan developer berbakat & terbaik di berbagai bidang keahlian
              </h4>
              <div className="col-lg-6 signinRecruiter--page--first__container">
                <img src={logo} style={{ width: "15%" }} className="" alt="" />
                <div className="signinRecruiter--content__container">
                  <p className="signinRecruiter--content__style px-4">
                    Temukan developer berbakat & terbaik di berbagai bidang
                    keahlian
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-right bg-white d-flex align-items-center">
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
                    name="email"
                    className="form-control"
                    placeholder="Input Your Email"
                    onChange={handleChangeForm}
                  />

                  <button
                    type="button"
                    className="btn w-100 btn-auth btn-warning text-white mt-3"
                    onClick={handleSubmit}
                  >
                    {loading ? (
                      <div
                        className="spinner-border text-light"
                        role="status"
                      ></div>
                    ) : (
                      "Send to your email"
                    )}
                  </button>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
