// import React from "react";
// import logo from "../../assets/images/hirea white.png";
import "./index.css";
import success from "../../assets/vectors/success.png";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import wrongLogo from "../../assets/vectors/wrongLogo.png";
import axios from "../../utils/axios";

export default function EmailVerificationRecruiter() {
  const { token } = useParams();
  const [valid, setValid] = useState([]);

  const verified = () => {
    axios.get(`http://localhost:8080/api/auth/verify/${token}`).then((res) => {
      setValid([res.data.data]);
    });
  };
  useEffect(() => {
    if (!verified()) {
      return setValid([]);
    } else {
      return verified();
    }
  }, []);

  return (
    <>
      {valid.length === 0 ? (
        <>
          <div className="container px-0 mx-0" style={{ margin: "auto" }}>
            <div className="row">
              <div className="col-12">
                <div className={"email--verif__container"}>
                  <div className="verified--container d-flex flex-column justify-content-center align-items-center">
                    <img
                      style={{ width: "40%" }}
                      src={wrongLogo}
                      alt="wrong_img"
                      className={success}
                    />
                    <h1 className=" text-secondary">
                      Email verified not success
                    </h1>
                    <p>Please check your email again !</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={"email--verif__container"}>
            <img src={success} alt="success_img" className={success} />
            <h1>Email verified successfully</h1>
            <Link to="/signin/recruiter">
              <button className="green-btn btn btn-primary">Login</button>
            </Link>
          </div>
        </>
      )}
    </>
  );
}
