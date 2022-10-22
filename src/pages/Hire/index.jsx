import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import profile from "../../assets/images/profile.png";
import mapPin from "../../assets/images/map-pin.png";
import phone from "../../assets/images/phone.png";
import axios from "../../utils/axios";
import "./index.css";
export default function Hire() {
  const [form, setForm] = useState({
    subject: "",
    message: "",
  });
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const data = {
    subject: form.subject,
    message: form.message,
    idJobseeker: "77efcadc-ddea-4c77-b4c4-696c3a87da28",
    idRecruiter: localStorage.getItem("id"),
  };
  const handleSendHire = async () => {
    try {
      console.log(data);
      const result = await axios.post("/api/message", data);
      // dispatch(signupRecruiter(form));
      alert(result.data.message);

      // navigate("/signin");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      {/* style={{ background: "#e5e5e5" }} */}
      <Header />
      <div className="container-fluid " style={{ backgroundColor: "#E5E5E5" }}>
        <div className="row  py-5 px-5 mt-5">
          <div
            className="col-4 hire-section-left  "
            style={{ marginTop: "-25px" }}
          >
            <main className="profile-seeker " style={{ width: "300px" }}>
              <div className="col-profile-seeker ">
                <div className="img ">
                  <img
                    className="img-profile-hire"
                    src={profile}
                    alt="profile-img"
                  />
                </div>
                <h1 className="name">Louis Tomlinson</h1>
                <p className="description">Web Developer</p>
                <p className="description">Frelancer</p>
                <div className="location">
                  <img src={mapPin} alt="mapPin" />
                  <p className="description">Purwokerto, Jawa Tengah</p>
                </div>
                <div className="location">
                  <img src={phone} alt="phone" />
                  <p className="description">0812-3456-789</p>
                </div>
                <p className="description mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum erat orci, mollis nec gravida sed, ornare quis
                  urna. Curabitur eu lacus fringilla, vestibulum risus at.
                </p>

                <h1 className="name">Skill</h1>
                <div className="list-skill">
                  <button className="button-skill">Phyton</button>
                  <button className="button-skill">Laravel</button>
                  <button className="button-skill">Golang</button>
                  <button className="button-skill">JavaScript</button>
                  <button className="button-skill">PHP</button>
                  <button className="button-skill">HTML</button>
                  <button className="button-skill">C++</button>
                  <button className="button-skill">Kotlin</button>
                  <button className="button-skill">Swift</button>
                </div>
              </div>
            </main>
          </div>
          <div
            className="col-6 hire-section-right bg-white "
            style={{ borderRadius: "15px" }}
            // style={}
          >
            <div className="hire-form mt-5">
              <p className="hire-title">Hubungi Louis Tomlison</p>
              <p className="hire-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt distinctio velit voluptates sapiente expedita.
                Asperiores!
              </p>
              <label className="hire-input"> Tujuan Tentang Pesan Ini</label>
              <select
                // id="profession"
                className="hire-dropdown mb-4 "
                onChange={handleChangeForm}
                name="subject"
              >
                <option>Project</option>
                <option>Fulltime</option>
                <option>Contract</option>
                <option>Freelance</option>
                <option>etc</option>
              </select>
              <label className="hire-input">Pesan</label>
              <textarea
                onChange={handleChangeForm}
                name="message"
                className="hire-message "
              ></textarea>
              <button
                type="button"
                className="btn btn-warning w-100 text-white mt-3 "
                onClick={handleSendHire}
              >
                kirim
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
