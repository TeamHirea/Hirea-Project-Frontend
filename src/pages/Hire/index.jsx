import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import profile from "../../assets/images/profile.png";
import mapPin from "../../assets/images/map-pin.png";
import phone from "../../assets/images/phone.png";
import axios from "../../utils/axios";
import { useSelector } from "react-redux";
import "./index.css";
export default function Hire() {
  const { id } = useParams();
  const user = useSelector((state) => state.user.data);
  const [form, setForm] = useState({
    subject: "Project",
    message: "",
  });
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const data = {
    subject: form.subject,
    message: form.message,
    idJobseeker: id,
    idRecruiter: localStorage.getItem("id"),
  };
  const handleSendHire = async () => {
    try {
      const result = await axios.post("/api/message", data);
      // dispatch(signupRecruiter(form));
      alert(result.data.message);

      // navigate("/signin");
      // eslint-disable-next-line no-empty
    } catch (error) {}
  };
  return (
    <div>
      {/* style={{ background: "#e5e5e5" }} */}
      <Header />
      <div className="container-fluid " style={{ backgroundColor: "#E5E5E5" }}>
        <div
          className="row  py-5 px-5 mt-5 "
          style={{ justifyContent: "space-around" }}
        >
          <div
            className="col-3 bg-primary col-profile-seeker bg-white "
            style={{ borderRadius: "15px" }}
          >
            <div className="img-jobseeker">
              <img
                className="img-profile-jobseeker rounded-circle"
                src={
                  user.image
                    ? `https://res.cloudinary.com/dnkor5xbu/image/upload/v1666345717/Hirea%20App/${user.image}`
                    : require("../../assets/images/profile-empty.jpg")
                }
                alt="profile image"
              />
            </div>
            <h1 className="name">{user.name}</h1>
            <p className="description">{user.job}</p>
            <p className="description">{user.job_type}</p>
            <div className="location">
              <img src={mapPin} alt="mapPin" style={{ height: "15px" }} />
              <p className="description">{user.location}</p>
            </div>
            <div className="location">
              <img src={phone} alt="phone" style={{ height: "15px" }} />
              <p className="description">{user.phone}</p>
            </div>
            <p className="description">{user.description}</p>

            <h1 className="name">Skill</h1>
            <div className="list-skill">
              {user.skill?.map((x, i) => (
                <button
                  className=" btn btn-warning text-white m-1"
                  type="button"
                  disabled
                  key={i}
                >
                  {x}
                </button>
              ))}
            </div>
          </div>

          <div
            className="col-6 hire-section-right bg-white "
            style={{ borderRadius: "15px" }}
            // style={}
          >
            <div className="hire-form mt-5">
              <p className="hire-title">Hubungi {user.name}</p>
              <p className="hire-desc">
                Silahkan cantumkan email atau kontak lainnya yang dapat
                dihubungi oleh {user.name}
              </p>
              <label className="hire-input"> Tujuan Tentang Pesan Ini</label>
              <select
                // id="profession"
                className="hire-dropdown mb-4 "
                onChange={handleChangeForm}
                name="subject"
                value={form.subject}
              >
                <option value="Project">Project</option>
                <option value="Fulltime">Fulltime</option>
                <option value="Contract">Contract</option>
                <option value="Freelance">Freelance</option>
                <option value="etc">etc</option>
              </select>
              <label className="hire-input">Pesan</label>
              <textarea
                onChange={handleChangeForm}
                name="message"
                className="hire-message "
                placeholder="input your message"
              ></textarea>
              <button
                type="button"
                className="btn btn-warning w-100 text-white mt-3 mb-2 "
                onClick={handleSendHire}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
