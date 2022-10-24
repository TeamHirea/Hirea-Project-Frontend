import React, { useEffect, useState } from "react";
import profile from "../../assets/images/profile.png";
import mapPin from "../../assets/images/map-pin.png";
import edit from "../../assets/images/edit.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { useSelector, useDispatch } from "react-redux";
import {
  getUserRecruiterById,
  updateProfileRecruiter,
} from "../../redux/action/user";
import { Toast, ToastContainer } from "react-bootstrap";

import "./EditProfileRecruiter.css";

function EditProfileRecruiter() {
  const dispatch = useDispatch();
  const recruiterData = useSelector((state) => state.recruiter.data);
  const [form, setForm] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("id");
    dispatch(getUserRecruiterById(id));
  }, []);

  console.log(recruiterData);
  const handleUpdate = async () => {
    setIsLoading(true);
    const id = localStorage.getItem("id");
    await dispatch(updateProfileRecruiter(form, id));
    await dispatch(getUserRecruiterById(id));
    setShowToast(true);
    setIsLoading(false);
  };
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
              {!isLoading ? (
                <button className="save-button" onClick={handleUpdate}>
                  Simpan
                </button>
              ) : (
                <button className="save-button">
                  <div
                    className="spinner-border spinner-border-sm text-light"
                    role="status"
                  >
                    <span className="visually-hidden" />
                  </div>
                </button>
              )}
              <ToastContainer
                position="top-center"
                className="p-3 position-fixed"
              >
                <Toast
                  show={showToast}
                  onClose={() => {
                    setShowToast(false);
                  }}
                >
                  <Toast.Header>
                    <strong className="me-auto">Success</strong>
                    <small className="text-muted">just now</small>
                  </Toast.Header>
                  <Toast.Body>Your profile is updated</Toast.Body>
                </Toast>
              </ToastContainer>
              <button className="back-button">Kembali</button>
            </div>
          </div>
          <div className="right-edit-col"></div>
          <div className="right-edit">
            <div className="edit-title">Data Diri</div>
            <hr />
            <div className="form-input">
              <label className="description-label">Nama Perusahaan</label>
              <input
                type="text"
                className="field-input"
                defaultValue={recruiterData.name}
                placeholder="Masukan nama perusahaan..."
                name="name"
                onChange={handleChangeForm}
              />
              <label className="description-label">Bidang</label>
              <input
                type="text"
                className="field-input"
                defaultValue={recruiterData.companyField}
                placeholder="Masukan bidang perusahaan. ex: Financial"
                name="companyField"
                onChange={handleChangeForm}
              />
              <label className="description-label">Domisili</label>
              <input
                type="text"
                className="field-input"
                defaultValue={recruiterData.location}
                placeholder="Masukan Domisili..."
                name="location"
                onChange={handleChangeForm}
              />
              <label className="description-label">Deskripsi Singkat</label>
              <textarea
                type="text"
                className="field-input-area"
                defaultValue={recruiterData.about}
                placeholder="Tuliskan deskripsi singkat..."
                name="about"
                onChange={handleChangeForm}
              />
              <label className="description-label">Email</label>
              <input
                type="text"
                className="field-input"
                defaultValue={recruiterData.email}
                placeholder="Masukan email..."
                name="email"
                onChange={handleChangeForm}
              />
              <label className="description-label">Instagram</label>
              <input
                type="text"
                className="field-input"
                defaultValue={recruiterData.instagram}
                placeholder="Masukan username instagram..."
                name="instagram"
                onChange={handleChangeForm}
              />
              <label className="description-label">Nomor Telepon</label>
              <input
                type="text"
                className="field-input"
                defaultValue={recruiterData.phone}
                placeholder="Masukan nomor telepon..."
                name="phone"
                onChange={handleChangeForm}
              />
              <label className="description-label">LinkedIn</label>
              <input
                type="text"
                className="field-input"
                defaultValue={recruiterData.linkedin}
                placeholder="Masukan nama linkedin..."
                name="linkedin"
                onChange={handleChangeForm}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default EditProfileRecruiter;
