// import React from "react";
import logo from "../../assets/images/hirea white.png";
import "./index.css";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { useParams } from "react-router-dom";

export default function SignupRecruiter() {
  // const navigate = useNavigate();

  const { otp } = useParams();
  const [form, setForm] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleConfirmResetPassword = async () => {
    try {
      const result = await axios.post(`/api/auth/resetPassword/${otp}`, form);
      alert(result.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
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
              <p className="title-auth fw-bold">Reset Password</p>
              <p className="desc-auth">
                You need to change your password to activate your account
              </p>

              <p className="label">Kata sandi</p>
              <input
                type="password"
                name="newPassword"
                placeholder="Masukan kata sandi"
                onChange={handleChangeForm}
              />

              <p className="label">Konfirmasi</p>
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChangeForm}
                placeholder="Masukan konfirmasi kata sandi"
              />

              <button
                type="button"
                className="btn w-100 btn-auth btn-warning text-white mt-5"
                onClick={handleConfirmResetPassword}
              >
                Reset Password
              </button>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
