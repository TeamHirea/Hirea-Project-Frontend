import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProfileJobseeker } from "../../redux/action/user";
import { Modal, Toast, ToastContainer } from "react-bootstrap";
import { updatePasswordJobseeker } from "../../redux/action/user";
import { useNavigate } from "react-router-dom";

function profile() {
  const id = localStorage.getItem("id");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [form, setForm] = useState({});
  const userData = useSelector((state) => state.user.data);
  const errorMessage = useSelector((state) => state.user.errorMessage);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem("id");
    dispatch(getProfileJobseeker(id));
  }, []);

  console.log(userData);

  const formHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const updateHandler = async () => {
    try {
      setIsLoading(true);
      await dispatch(updatePasswordJobseeker(form, id));
      setIsLoading(false);
      setForm({});
      setShowModal(false);
      setShowErrorToast(false);
      setShowToast(true);
    } catch (error) {
      setIsLoading(false);
      setShowErrorToast(true);
    }
  };

  return (
    <div className="profile_main-container">
      <div className="profile_container">
        <div className="profile_image-container">
          <img
            src={
              userData.image
                ? `https://res.cloudinary.com/dnkor5xbu/image/upload/v1666345717/${userData.image}`
                : require("../../assets/images/profile-empty.jpg")
            }
            alt="profile"
            className="profile_profile-image"
          />
          <input type="file" />
          <div className="profile_edit-button">
            <img
              src={require("../../assets/images/edit.png")}
              alt="logo edit"
            />
            Edit
          </div>
        </div>
        <div className="profile_name">{userData.name ? userData.name : ""}</div>
        <div className="profile_job">{userData.job ? userData.job : ""}</div>
        <div className="profile_text">
          {userData.job_type ? userData.job_type : ""}
        </div>
        <div className="profile_text">
          <img
            src={require("../../assets/images/map-pin.png")}
            alt="map logo"
          />
          {userData.location ? userData.location : "Indonesia"}
        </div>
        <div className="profile_text">
          <img
            src={require("../../assets/images/phone.png")}
            alt="phone logo"
          />
          {userData.phone ? `0${userData.phone}` : ""}
        </div>
        <div className="profile_text">
          {userData.description ? userData.description : ""}
        </div>
      </div>
      <div
        className="profile_purple-button"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Ubah Password
      </div>
      <div
        className="profile_white-button"
        onClick={() => {
          navigate("/profile");
        }}
      >
        Kembali
      </div>

      <Modal show={showModal} size="s" centered className="modal modal-md">
        <Modal.Title className="modal-title text-center mt-2">
          Update Password
        </Modal.Title>
        <Modal.Body className="modal-body password_input-container">
          <label className="password_input-label">
            Password Lama
            <input
              type="password"
              name="oldPassword"
              className="password_input"
              placeholder="Masukan password lama anda"
              onChange={formHandler}
            />
          </label>
          <label className="password_input-label">
            Password Baru
            <input
              type="password"
              name="newPassword"
              className="password_input"
              placeholder="Masukan password baru anda"
              onChange={formHandler}
            />
          </label>
          <label className="password_input-label">
            Konfirmasi Password
            <input
              type="password"
              name="confirmPassword"
              className="password_input"
              placeholder="Konfirmasi password baru anda"
              onChange={formHandler}
            />
          </label>
        </Modal.Body>
        <div className="modal-footer experience_modal__footer ">
          {isLoading ? (
            <button className="experience_modal__button-active">
              <div
                className="spinner-border spinner-border-sm text-light"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </button>
          ) : (
            <button
              className="experience_modal__button-active"
              onClick={updateHandler}
            >
              Update
            </button>
          )}

          <button
            className="experience_modal__button-pasive"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Batal
          </button>
        </div>
      </Modal>
      <ToastContainer position="top-center" className="p-3 position-fixed">
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
          <Toast.Body>Your password has been updated</Toast.Body>
        </Toast>
      </ToastContainer>
      <ToastContainer position="top-center" className="p-3 position-fixed">
        <Toast
          show={showErrorToast}
          onClose={() => {
            setShowErrorToast(false);
          }}
        >
          <Toast.Header>
            <strong className="me-auto">Failed</strong>
            <small className="text-muted">just now</small>
          </Toast.Header>
          <Toast.Body>{errorMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default profile;
