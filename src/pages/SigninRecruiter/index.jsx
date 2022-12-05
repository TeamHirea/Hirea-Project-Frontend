// import React from "react";
import logo from "../../assets/images/hirea white.png";
import "./index.css";
import React, { useState } from "react";
import logoMobile from "../../assets/images/logo.png";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";

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
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const result = await axios.post("/api/auth/register/jobseeker", form);
      setIsLoading(false);
      alert(result.data.message);
      // navigate("/signin/jobseeker");
      setForm({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      // alert(error);
      // setLoading(false);
      // alert(error.data);
      console.log(error);
    }
  };
  return (
    <div className="container-fluid signinRecruiter--container">
      <div className="row px-0 mx-0">
        <div className="col-12">
          <div className="container">
            <div className="row p-4 signinRecruiter--page__container">
              <div className="col-lg-6 signinRecruiter--page--first__container">
                <img
                  src={logo}
                  style={{ width: "15%", cursor: "pointer" }}
                  onClick={() => {
                    navigate("/");
                  }}
                  alt=""
                />
                <div className="signinRecruiter--content__container">
                  <p className="signinRecruiter--content__style px-4">
                    Temukan developer berbakat & terbaik di berbagai bidang
                    keahlian
                  </p>
                </div>
              </div>
              <div className="col-lg-6 signinRecruiter--page--second--form__container pt-3">
                <div className="signinRecruiter--page--second__container ">
                  <img
                    src={logoMobile}
                    style={{ width: "25%" }}
                    className="d-lg-none d-md-none d-sm-none"
                    alt=""
                  />

                  <h1 style={{ fontWeight: "600", color: "#1F2A36" }}>
                    Hello, Pewpeople
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    euismod ipsum et dui rhoncus auctor.
                  </p>
                  <form onSubmit={handleSignup}>
                    <div className="form-group signinRecruiter--from py-1">
                      <h1
                        className="signinRecruiter--title--login__show d-lg-none d-md-none d-sm-none"
                        style={{ fontWeight: 700, color: "#46505C" }}
                      >
                        Register Jobseeker
                      </h1>
                      <p className="d-md-none d-sm-none text-secondary signinRecruiter--secondTitle--login__show">
                        Lorem ipsum dolor sit amet.
                      </p>
                      <label htmlFor="exampleInputEmail1">Nama</label>
                      <input
                        onChange={handleChangeForm}
                        type="text"
                        name="name"
                        value={form.name}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Masukkan nama panjang"
                      />
                    </div>
                    <div className="form-group signinRecruiter--from py-1">
                      <label htmlFor="exampleInputEmail">Email</label>
                      <input
                        type="email"
                        onChange={handleChangeForm}
                        name="email"
                        value={form.email}
                        className="form-control"
                        placeholder="Masukkan kata sandi"
                      />
                    </div>
                    <div className="form-group signinRecruiter--from py-1">
                      <label htmlFor="exampleInputPassword1">
                        No handphone
                      </label>
                      <input
                        type="text"
                        onChange={handleChangeForm}
                        name="phone"
                        value={form.phone}
                        className="form-control"
                        placeholder="Masukkan kata sandi"
                      />
                    </div>
                    <div className="form-group signinRecruiter--from py-1">
                      <label htmlFor="exampleInputPassword2">Kata Sandi</label>
                      <input
                        type="password"
                        onChange={handleChangeForm}
                        name="password"
                        value={form.password}
                        className="form-control"
                        placeholder="Masukkan kata sandi"
                      />
                    </div>
                    <div className="form-group signinRecruiter--from py-1">
                      <label htmlFor="exampleInputPassword1">
                        Konfirmasi kata sandi
                      </label>
                      <input
                        type="password"
                        onChange={handleChangeForm}
                        name="confirmPassword"
                        value={form.confirmPassword}
                        className="form-control"
                        placeholder="Masukkan konfirmasi kata sandi"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn w-100 signinRecruiter--button__style"
                      style={{ background: "#FBB017", color: "white" }}
                    >
                      {isLoading ? (
                        <div
                          className="spinner-border text-light"
                          role="status"
                        >
                          <span className="sr-only"></span>
                        </div>
                      ) : (
                        "Masuk"
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
