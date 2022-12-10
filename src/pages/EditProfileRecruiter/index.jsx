import React, { useEffect, useState } from "react";
import profile from "../../assets/images/profile-empty.jpg";
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
import { useNavigate } from "react-router-dom";

function EditProfileRecruiter() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const recruiterData = useSelector((state) => state.user.data);
  const [form, setForm] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formUpdate, setFormUpdate] = useState({});
  const [image, setImage] = useState("");

  useEffect(() => {
    const id = localStorage.getItem("id");
    dispatch(getUserRecruiterById(id));
  }, []);

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

  const handleChangeFormUpdate = (e) => {
    e.preventDefault();
    if (e.target.name === "image") {
      setFormUpdate({ ...formUpdate, [e.target.name]: e.target.files[0] });
      setImage(URL.createObjectURL(e.target.files[0]));
    } else {
      setFormUpdate({ ...formUpdate, [e.target.name]: e.target.value });
    }
  };

  const handleUpdateImg = (e) => {
    e.preventDefault();
    const formData = new FormData();
    // formData.append("name", form.name);
    for (const data in formUpdate) {
      formData.append(data, formUpdate[data]);
    }

    dispatch(updateProfileRecruiter(formData, localStorage.getItem("id")))
      .then(() => {
        // resetFormUpdate();
        // setTimeout(() => {
        dispatch({ type: "RESET_MESSAGE" });
        dispatch(getUserRecruiterById(localStorage.getItem("id")));
        // }, 3000);
      })
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <>
      <Header />
      <main className="main-edit-profile">
        <div className="edit-profile-recruiter">
          <div className="left-edit-col">
            <div className="left-edit">
              <div className="box">
                <form
                  className="profile_image-container mb-5"
                  onSubmit={handleUpdateImg}
                >
                  {image ? (
                    <img
                      src={image}
                      className="profile_profile-image"
                      alt="view image"
                    />
                  ) : (
                    <>
                      <img
                        src={
                          recruiterData.image
                            ? `https://res.cloudinary.com/dnkor5xbu/image/upload/v1666345717/${recruiterData.image}`
                            : profile
                        }
                        alt="profile"
                        className="profile_profile-image"
                      />
                    </>
                  )}
                  <input
                    type="file"
                    name="image"
                    id="getFile2"
                    className="d-none"
                    onChange={handleChangeFormUpdate}
                  />
                  <div className="profile_edit-button">
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center gap-4">
                        <img
                          src={edit}
                          alt="logo edit"
                          // className="w-25"
                        />
                        <label htmlFor="getFile2">Edit</label>
                      </div>
                      <button className="profile_purple-button w-100">
                        {recruiterData.isLoading ? (
                          <div
                            className="spinner-border text-light"
                            role="status"
                          >
                            {/* <span className="sr-only">Loading...</span> */}
                          </div>
                        ) : (
                          "submit"
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <h1 className="company-name">{recruiterData.name}</h1>
              <h2 className="company-field">{recruiterData.companyField}</h2>
              <div className="location-company">
                <img className="map-pin-img" src={mapPin} alt="location" />
                <p className="address">{recruiterData.location}</p>
              </div>
              <p className="detail-company">{recruiterData.about}</p>
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
                className="p-3 position-fixed toast-container"
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
              <button
                className="back-button"
                onClick={() => {
                  navigate(`/recruiter/profile`);
                }}
              >
                Kembali
              </button>
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
