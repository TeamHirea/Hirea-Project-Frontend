// import React from "react";
import logo from "../../assets/images/logo.png";
import "./index.css";
import React, { useState } from "react";
import logoMobile from "../../assets/images/logo.png";
import axios from "../../utils/axios";
export default function SignupRecruiter() {
  // const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    companyName: "",
    companyField: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await axios.post("/api/auth/register/recruiter", form);
      // dispatch(signupRecruiter(form));
      alert(result.data.message);
      setLoading(false);
      setForm({
        name: "",
        email: "",
        companyName: "",
        companyField: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
      // navigate("/signin");
    } catch (error) {
      setLoading(false);
      alert(error.response.data.message);
    }
  };
  return (
    <div
      className="container-fluid signinRecruiter--container--second"
      style={{ boxSizing: "border-box" }}
    >
      <div className="row px-0 mx-0">
        <div className="col-12">
          <div className="container">
            <div className="row p-4 signinRecruiter--page__container">
              <div className="col-lg-6 signinRecruiter--page--first__container">
                <img src={logo} style={{ width: "15%" }} className="" alt="" />
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
                        Register Recruiter
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
                        aria-describedby="emailHelp"
                        placeholder="Masukkan nama panjang"
                      />
                    </div>
                    <div className="form-group signinRecruiter--from py-1">
                      <label htmlFor="exampleInputPassword1">Email</label>
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
                      <label htmlFor="exampleInputPassword1">Perusahaan</label>
                      <input
                        type="text"
                        onChange={handleChangeForm}
                        name="companyName"
                        value={form.companyName}
                        className="form-control"
                        placeholder="Masukkan kata sandi"
                      />
                    </div>
                    <div className="form-group signinRecruiter--from py-1">
                      <label htmlFor="exampleInputPassword1">
                        Bidang perusahaan
                      </label>
                      <input
                        type="text"
                        onChange={handleChangeForm}
                        name="companyField"
                        value={form.companyField}
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
                      <label htmlFor="exampleInputPassword1">Kata sandi</label>
                      <input
                        type="password"
                        onChange={handleChangeForm}
                        name="password"
                        value={form.password}
                        className="form-control"
                        placeholder="Masukkan konfirmasi kata sandi"
                      />
                    </div>
                    <div className="form-group signinRecruiter--from py-1">
                      <label htmlFor="exampleInputPassword1">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        onChange={handleChangeForm}
                        name="confirmPassword"
                        value={form.confirmPassword}
                        className="form-control"
                        placeholder="Masukkan kata sandi"
                      />
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
