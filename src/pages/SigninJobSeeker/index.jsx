import React, { useState } from "react";
import logo from "../../assets/images/hirea white.png";
import "./index.css";
import logoMobile from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { useDispatch } from "react-redux";
import { getUserJobseekerById } from "../../redux/action/user";
import { Toast, ToastContainer } from "react-bootstrap";
export default function SigninJobSeeker() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isError, setIsError] = useState(false);
  const [msg, setMsg] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await axios.post("/api/auth/signin/jobseeker", form);
      localStorage.setItem("id", result.data.data.userId);
      localStorage.setItem("token", result.data.data.token);
      localStorage.setItem("refreshtoken", result.data.data.refreshToken);
      localStorage.setItem("role", "jobseeker");
      // localStorage.setItem("refreshToken", result.data.data.refreshToken);
      setMsg(result.data.message);
      setShowToast(true);
      setLoading(false);
      setIsError(false);
      dispatch(getUserJobseekerById(localStorage.getItem("id")));
      navigate("/");
    } catch (error) {
      setIsError(true);
      setMsg(error.response.data.message);
      setShowToast(true);
      setLoading(false);
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
              <div className="col-lg-6 signinRecruiter--page--second--form__container">
                <div className="signinRecruiter--page--second__container ">
                  <img
                    src={logoMobile}
                    style={{ width: "25%", cursor: "pointer" }}
                    className="d-lg-none d-md-none d-sm-none"
                    alt=""
                    onClick={() => {
                      navigate("/");
                    }}
                  />

                  <h1 style={{ fontWeight: "600", color: "#1F2A36" }}>
                    Hello, Pewpeople
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    euismod ipsum et dui rhoncus auctor.
                  </p>
                  <form onSubmit={handleLogin}>
                    <div className="form-group signinRecruiter--from py-3">
                      <h1
                        className="signinRecruiter--title--login__show d-lg-none d-md-none d-sm-none"
                        style={{ fontWeight: 700, color: "#46505C" }}
                      >
                        Login
                      </h1>
                      <p className="d-md-none d-sm-none text-secondary signinRecruiter--secondTitle--login__show">
                        Lorem ipsum dolor sit amet.
                      </p>
                      <label htmlFor="exampleInputEmail1">Email</label>
                      <input
                        onChange={handleChangeForm}
                        type="email"
                        name="email"
                        value={form.email}
                        className="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Masukkan alamat email"
                      />
                    </div>
                    <div className="form-group signinRecruiter--from py-3">
                      <label htmlFor="exampleInputPassword1">Kata Sandi</label>
                      <input
                        type="password"
                        onChange={handleChangeForm}
                        name="password"
                        value={form.password}
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Masukkan kata sandi"
                      />
                    </div>
                    <div className="text-end py-3">
                      <div
                        onClick={() => {
                          navigate("/reset/send");
                        }}
                        className="singinRecruiter--forgot--password__style"
                      >
                        {" "}
                        Lupa kata sandi ?
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn w-100 signinRecruiter--button__style"
                      style={{ background: "#FBB017", color: "white" }}
                    >
                      {loading ? (
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
                    <div className="py-4 d-flex">
                      Anda belum punya akun?{" "}
                      <div
                        style={{
                          textDecoration: "none",
                          color: "#FBB017",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          navigate("/signup/jobseeker");
                        }}
                      >
                        Daftar disini
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        className="p-3 position-fixed toast-container"
      >
        <Toast
          show={showToast}
          onClose={() => {
            setShowToast(false);
          }}
        >
          <Toast.Header>
            {isError ? (
              <strong className="me-auto text-danger">Failed</strong>
            ) : (
              <strong className="me-auto text-success">Success</strong>
            )}

            <small className="text-muted">just now</small>
          </Toast.Header>
          <Toast.Body>{msg}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}
