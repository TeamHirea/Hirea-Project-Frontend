// import React from "react";
import logo from "../../assets/images/hirea white.png";
import "./index.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";

export default function SignupJobSeeker() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSignup = async () => {
    try {
      setIsLoading(true);
      const result = await axios.post("/api/auth/register/jobseeker", form);
      setIsLoading(false);
      alert(result.data.message);
      navigate("/signin/jobseeker");
    } catch (error) {
      setIsLoading(false);
      alert(error.response.data.message);
    }
  };
  return (
    <div className="container-signup py-0">
      <div className=" container-auth ">
        <div className="row row-auth ">
          <div className="col-6 col-left-js">
            <img src={logo} alt="" className="logo-auth" />
            <h1 className="desc-left">
              Temukan developer berbakat & terbaik di berbagai bidang keahlian
            </h1>
          </div>
          <div className="col-6 col-right ">
            <div className="auth-right ">
              <p className="title-auth"> Halo, Pewpeople</p>
              <p className="desc-auth">Lorem ipsum dolor sit amet.</p>
              <p className="label">Nama</p>
              <input
                type="text"
                name="name"
                placeholder="Masukan Nama Anda"
                onChange={handleChangeForm}
              />
              <p className="label">Email</p>
              <input
                type="text"
                name="email"
                placeholder="Masukan Email Anda"
                onChange={handleChangeForm}
              />

              <p className="label">No.Handphone</p>
              <input
                onChange={handleChangeForm}
                type="text"
                name="phone"
                placeholder="Masukan Nomor Handphone Anda"
              />
              <p className="label">Password</p>
              <input
                type="password"
                name="password"
                onChange={handleChangeForm}
                placeholder="Masukan Password Anda"
              />
              <p className="label">Confirm Password</p>
              <input
                onChange={handleChangeForm}
                type="password"
                name="confirmPassword"
                placeholder="Masukan Confirm Password Anda"
              />

              <button
                type="button"
                className="btn w-100 btn-auth btn-warning text-white mt-4"
                onClick={handleSignup}
              >
                {isLoading ? (
                  <div
                    className="spinner-border spinner-border-sm text-light"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "Signup"
                )}
              </button>
              <p className="footer-auth">
                Already Have An Account <a href="#">Login Here</a>{" "}
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
