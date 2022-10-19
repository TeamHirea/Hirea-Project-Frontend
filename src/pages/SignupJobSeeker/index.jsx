import React from "react";
import logo from "../../assets/images/logo.png";
import "./index.css";
export default function SignupJobSeeker() {
  return (
    <div className="container-signup py-0">
      <div className=" container-auth ">
        <div className="row row-auth ">
          <div className="col-6 col-left">
            <img src={logo} alt="" className="logo-auth" />
            <h1 className="desc-left">
              Temukan developer berbakat & terbaik di berbagai bidang keahlian
            </h1>
          </div>
          <div className="col-6 col-right">
            <div className="auth-right">
              <p className="title-auth"> Halo, Pewpeople</p>
              <p className="desc-auth">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />{" "}
                Iste quae quaerat.
              </p>
              <p className="label">Email</p>
              <input
                type="text"
                name="email"
                placeholder="Masukan Email Anda"
              />
              <p className="label">Password</p>
              <input
                type="text"
                name="password"
                placeholder="Masukan Password Anda"
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
