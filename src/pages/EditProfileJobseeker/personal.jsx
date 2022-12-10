import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getProfileJobseeker,
  updateProfileJobseeker,
} from "../../redux/action/user";
import { Toast, ToastContainer } from "react-bootstrap";

function personal() {
  const [form, setForm] = useState({});
  const [showToast, setShowToast] = useState(false);
  const userData = useSelector((state) => state.user.data);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const id = localStorage.getItem("id");
    dispatch(getProfileJobseeker(id));
  }, []);
  const formHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const updateHandler = async () => {
    setIsLoading(true);
    const id = localStorage.getItem("id");
    await dispatch(updateProfileJobseeker(form, id));
    await dispatch(getProfileJobseeker(id));
    setShowToast(true);
    setIsLoading(false);
  };
  return (
    <div className="personal_personal">
      <div className="personal_personal-title">Data Diri</div>
      <div className="personal_input-section">
        <div>
          <label className="personal_input-label">Nama lengkap</label>
          <input
            type="text"
            placeholder="Masukan nama lengkap"
            className="personal_input"
            defaultValue={userData.name}
            name="name"
            onChange={formHandler}
          />
        </div>
        <div>
          <label className="personal_input-label">Job</label>
          <input
            type="text"
            placeholder="Masukan Pekerjaan"
            className="personal_input"
            defaultValue={userData.job_type}
            name="job_type"
            onChange={formHandler}
          />
        </div>
        <div>
          <label className="personal_input-label">Job desk</label>
          <input
            type="text"
            placeholder="Masukan job desk"
            className="personal_input"
            defaultValue={userData.job}
            name="job"
            onChange={formHandler}
          />
        </div>
        <div>
          <label className="personal_input-label">Domisili</label>
          <input
            type="text"
            placeholder="Masukan domisili"
            className="personal_input"
            defaultValue={userData.location}
            name="location"
            onChange={formHandler}
          />
        </div>
        <div className="personal_social-section">
          <div>
            <label className="personal_input-label">Instagram</label>
            <input
              type="text"
              placeholder="Masukan Username IG"
              className="personal_input"
              defaultValue={userData.instagram}
              name="instagram"
              onChange={formHandler}
            />
          </div>
          <div>
            <label className="personal_input-label">Github</label>
            <input
              type="text"
              placeholder="Masukan Username Github"
              className="personal_input"
              defaultValue={userData.github}
              name="github"
              onChange={formHandler}
            />
          </div>
          <div>
            <label className="personal_input-label">Gitlab</label>
            <input
              type="text"
              placeholder="Masukan Username Gitlab"
              className="personal_input"
              defaultValue={userData.gitlab}
              name="gitlab"
              onChange={formHandler}
            />
          </div>
        </div>
        <div>
          <label className="personal_input-label">Deskripsi singkat</label>
          <input
            type="text-area"
            placeholder="Tuliskan deskripsi singkat"
            className="personal_input-desc"
            defaultValue={userData.description}
            name="description"
            onChange={formHandler}
          />
        </div>
        {!isLoading ? (
          <div className="personal_save-button" onClick={updateHandler}>
            Simpan
          </div>
        ) : (
          <div className="personal_save-button">
            <div
              className="spinner-border spinner-border-sm text-light"
              role="status"
            >
              <span className="visually-hidden" />
            </div>
          </div>
        )}
      </div>
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
    </div>
  );
}

export default personal;
