import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import profile from "../../assets/images/profile.png";
import mapPin from "../../assets/images/map-pin.png";
import phone from "../../assets/images/phone.png";

import "./index.css";
export default function Hire() {
  return (
    <div>
      {/* style={{ background: "#e5e5e5" }} */}
      <Header />
      <div className="container">
        <div className="row  py-3">
          <div
            className="col-4 hire-section-left bg-primary "
            style={{ marginTop: "-35px" }}
          >
            <main className="profile-seeker " style={{ width: "300px" }}>
              <div className="col-profile-seeker ">
                <div className="img ">
                  <img
                    className="img-profile"
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
          <div className="col-8 hire-section-right ">
            <div className="hire-form ">
              <p className="hire-title">Hubungi Louis Tomlison</p>
              <p className="hire-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt distinctio velit voluptates sapiente expedita.
                Asperiores!
              </p>
              <label className="hire-input"> Tujuan Tentang Pesan Ini</label>
              <select
                id="profession"
                className="hire-dropdown mb-4 "
                // onChange={handleChangeForm}
                name="profession"
              >
                <option>Projek</option>
                <option>Fulltime</option>
                <option>Contract</option>
                <option>...</option>
              </select>
              <label className="hire-input"> Pesan</label>
              <textarea
                name="pesan"
                id=""
                // cols="30"
                // rows="10"
                className="hire-message "
              ></textarea>
              <button
                type="button"
                className="btn btn-warning w-100 text-white mt-3"
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
