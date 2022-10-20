// import React from "react";
import logo from "../../assets/images/hirea white.png";
import "./index.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SignupJobSeeker() {
  const navigate = useNavigate();
  console.log(navigate);
  const [form, setForm] = useState({
    name: "",
    email: "",
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
                name="nama"
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
                type="text"
                name="confirmPassword"
                placeholder="Masukan Confirm Password Anda"
              />
              <p className="ask">Lupa Kata Sandi?</p>
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
