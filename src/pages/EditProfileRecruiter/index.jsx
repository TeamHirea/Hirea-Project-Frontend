import React from "react";
import profile from "../../assets/images/profile.png";
import mapPin from "../../assets/images/map-pin.png";
import edit from "../../assets/images/edit.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./EditProfileRecruiter.css";

export default function EditProfileRecruiter() {
  return (
    <>
      <Header />
      <main className="main-edit-profile">
        <div className="edit-profile-recruiter">
          <div className="left-edit-col">
            <div className="left-edit">
              <div className="box">
                <div className="img">
                  <img className="profile-img" src={profile} alt="profile" />
                  <div className="edit-img">
                    <img className="edit-icon" src={edit} alt="edit" />
                    <p className="edit-text">Edit</p>
                  </div>
                </div>
              </div>
              <h1 className="company-name">PT. Mencari Cinta Sejati</h1>
              <h2 className="company-field">Urusan Hati</h2>
              <div className="location-company">
                <img className="map-pin-img" src={mapPin} alt="location" />
                <p className="address">Purworejo, Jawa Tengah</p>
              </div>
              <p className="detail-company">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
                Curabitur eu lacus fringilla, vestibulum risus at.
              </p>
            </div>
            <div className="col-button">
              <button className="save-button">Simpan</button>
              <button className="back-button">Kembali</button>
            </div>
          </div>
          <div className="right-edit-col"></div>
          <div className="right-edit">
            <div className="edit-title">Data Diri</div>
            <hr />
            <form className="form-input">
              <label className="description-label">Nama Perusahaan</label>
              <input
                type="text"
                className="field-input"
                placeholder="Masukan nama perusahaan..."
              />
              <label className="description-label">Bidang</label>
              <input
                type="text"
                className="field-input"
                placeholder="Masukan bidang perusahaan. ex: Financial"
              />
              <label className="description-label">Domisili</label>
              <input
                type="text"
                className="field-input"
                placeholder="Masukan Domisili..."
              />
              <label className="description-label">Deskripsi Singkat</label>
              <textarea
                type="text"
                className="field-input-area"
                placeholder="Tuliskan deskripsi singkat..."
              />
              <label className="description-label">Email</label>
              <input
                type="text"
                className="field-input"
                placeholder="Masukan email..."
              />
              <label className="description-label">Instagram</label>
              <input
                type="text"
                className="field-input"
                placeholder="Masukan username instagram..."
              />
              <label className="description-label">Nomor Telepon</label>
              <input
                type="text"
                className="field-input"
                placeholder="Masukan nomor telepon..."
              />
              <label className="description-label">LinkedIn</label>
              <input
                type="text"
                className="field-input"
                placeholder="Masukan nama linkedin..."
              />
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
