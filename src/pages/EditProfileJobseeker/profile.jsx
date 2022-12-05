import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getProfileJobseeker,
  updateProfileJobseeker,
} from "../../redux/action/user";
import { Modal, Toast, ToastContainer } from "react-bootstrap";
import { updatePasswordJobseeker } from "../../redux/action/user";
import { useNavigate } from "react-router-dom";

function profile() {
  const id = localStorage.getItem("id");
  const [isLoading, setIsLoading] = useState(false);
  const [uploadImage, setUploadImage] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [form, setForm] = useState({});
  const user = useSelector((state) => state.user);
  const [formUpdate, setFormUpdate] = useState({});
  const [image, setImage] = useState("");
  const errorMessage = useSelector((state) => state.user.errorMessage);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem("id");
    dispatch(getProfileJobseeker(id));
  }, []);

  const handleChangeFormUpdate = (e) => {
    e.preventDefault();
    if (e.target.name === "image") {
      setFormUpdate({ ...formUpdate, [e.target.name]: e.target.files[0] });
      setImage(URL.createObjectURL(e.target.files[0]));
    } else {
      setFormUpdate({ ...formUpdate, [e.target.name]: e.target.value });
    }
  };

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

  const handleUpdate = async (e) => {
    setUploadImage(true);
    e.preventDefault();
    const formData = new FormData();
    // formData.append("name", form.name);
    for (const data in formUpdate) {
      formData.append(data, formUpdate[data]);
    }


    await dispatch(
      updateProfileJobseeker(formData, localStorage.getItem("id"))
    ).then(() => {
      // resetFormUpdate();
      // setTimeout(() => {
      dispatch({ type: "RESET_MESSAGE" });
      dispatch(getProfileJobseeker(localStorage.getItem("id")));
      // }, 3000);
    });

    setUploadImage(false);
  };

  return (
    <div className="profile_main-container">
      <div className="profile_container">
        <form className="profile_image-container" onSubmit={handleUpdate}>
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
                  user.data.image
                    ? `https://res.cloudinary.com/dnkor5xbu/image/upload/v1666345717/${user.data.image}`
                    : require("../../assets/images/profile-empty.jpg")
                }
                alt="profile"
                className="profile_profile-image"
              />
              <input
                type="file"
                name="image"
                id="getFile1"
                className="d-none"
                onChange={handleChangeFormUpdate}
              />
            </>
          )}
          <div className="profile_edit-button">
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center gap-4">
                <img
                  src={require("../../assets/images/edit.png")}
                  alt="logo edit"
                  // className="w-25"
                />
                <label htmlFor="getFile1">Edit</label>
              </div>
              <button className="profile_purple-button w-100">
                {uploadImage ? (
                  <div className="spinner-border text-light" role="status">
                    {/* <span className="sr-only">Loading...</span> */}
                  </div>
                ) : (
                  "submit"
                )}
              </button>
            </div>
          </div>
        </form>
        <div className="profile_name">
          {user.data.name ? user.data.name : ""}
        </div>
        <div className="profile_job">{user.data.job ? user.data.job : ""}</div>
        <div className="profile_text">
          {user.data.job_type ? user.data.job_type : ""}
        </div>
        <div className="profile_text">
          <img
            src={require("../../assets/images/map-pin.png")}
            alt="map logo"
          />
          {user.data.location ? user.data.location : "Indonesia"}
        </div>
        <div className="profile_text">
          <img
            src={require("../../assets/images/phone.png")}
            alt="phone logo"
          />
          {user.data.phone ? `0${user.data.phone}` : ""}
        </div>
        <div className="profile_text">
          {user.data.description ? user.data.description : ""}
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
          <Toast.Body>Your password has been updated</Toast.Body>
        </Toast>
      </ToastContainer>
      <ToastContainer
        position="top-center"
        className="p-3 position-fixed toast-container"
      >
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
