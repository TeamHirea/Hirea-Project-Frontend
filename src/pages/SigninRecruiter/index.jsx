import React, { useState } from "react";
import logo from "../../assets/images/hirea white.png";
import "./index.css";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";

export default function SigninRecruiter() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleLogin = async () => {
    try {
      const result = await axios.post("/api/auth/signin/recruiter", form);
      console.log(result);
      localStorage.setItem("id", result.data.data.userId);
      localStorage.setItem("token", result.data.data.token);

      alert(result.data.message);
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="singinRecruiter--container__background p-2">
      <div className="container-fluid px-5 signinRecruiter--mobile__container bg-success">
        <div className="container-auth rounded-1 px-5 bg-warning">
          <div className="row signinRecruiter--container__form--size bg-primary px-5">
            <div className=" col-12 bg-primary signinRecruiter--col-left__banner w-50 ">
              <img src={logo} alt="" className="logo-auth" />
              <h4 className="signinRecruiter--desc-left">
                Temukan developer berbakat & terbaik di berbagai bidang keahlian
              </h4>
            </div>
            <div className="col-12 col-right bg-danger">
              <div className="container auth-right ">
                <p className="title-auth signinRecruiter--col-left__banner">
                  {" "}
                  Halo, Pewpeople
                </p>
                <p className="desc-auth signinRecruiter--col-left__banner">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor.
                </p>

                <form action="" className="singinRecruiter--form">
                  <div className="signRecruiter--form__container pt-4">
                    <label className="label text-secondary">Email</label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChangeForm}
                      className="form-control py-2"
                      placeholder="Masukkan alamat email"
                      aria-label="Email"
                    />
                  </div>
                  <div className="signRecruiter--form__container pt-4">
                    <label className="label text-secondary">Password</label>
                    <div className="input-group ">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id=""
                        className="form-control py-2"
                        placeholder="Masukkan kata sandi"
                        onChange={handleChangeForm}
                      />
                      <button
                        className="btn btn-sm btn-light signinRecruiter--button__border text-secondary"
                        onClick={handleShowPassword}
                      >
                        {showPassword ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-eye-slash-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                            <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-eye-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="signinRecruiter--forgotPass__container py-3">
                    <a className="ask">Lupa Kata Sandi?</a>
                  </div>
                  <button
                    type="button"
                    className="btn w-100 btn-auth btn-warning text-white"
                    onClick={handleLogin}
                    style={{ fontWeight: 700 }}
                  >
                    Masuk
                  </button>
                </form>
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
