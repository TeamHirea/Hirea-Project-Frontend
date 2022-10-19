import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./index.css";
export default function Hire() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row  py-3">
          <div className="col-4 hire-section-left">helloworld</div>
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
