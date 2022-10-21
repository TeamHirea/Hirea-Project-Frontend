import React, { useState } from "react";
import logo from "../../assets/images/hirea white.png";
import "./index.css";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";

export default function SigninJobSeeker() {
  const navigate = useNavigate();
  console.log(navigate);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  console.log(form);
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleLogin = async () => {
    try {
      const result = await axios.post("/api/auth/signin/jobseeker", form);
      localStorage.setItem("idUser", result.data.data.userid);
      localStorage.setItem("token", result.data.data.token);
      localStorage.setItem("refreshToken", result.data.data.refreshToken);
      alert(result.data.message);
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  console.log(handleLogin);
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
                  type="text"
                  name="password"
                  placeholder="Input Your Password"
                  onChange={handleChangeForm}
                />

                <p className="ask">Forgot Your Password?</p>
                <button
                  type="button"
                  className="btn w-100 btn-auth btn-warning text-white"
                  onClick={handleLogin}
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
    </div>
  );
}
