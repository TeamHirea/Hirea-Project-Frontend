import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Toast, ToastContainer } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  addExperience,
  // getExperience,
  // updateExperience,
} from "../../redux/action/experience";

function experience() {
  const id = localStorage.getItem("id");
  const [showModal, setShowModal] = useState(true);
  const [form, setForm] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  // const [activeExperienceId] = useState("");

  const dispatch = useDispatch();

  const formHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const addExperienceHandler = async () => {
    setIsLoading(true);
    await dispatch(addExperience({ ...form, id_jobseeker: id }));
    // await dispatch(getExperience(id));
    setShowModal(false);
    setShowToast(true);
    setIsLoading(false);
  };
  return (
    <div className="experience_personal">
      <div className="experience_personal-title">Pengalaman Kerja</div>
      <div className="experience_input-section">
        <div className="experience_column">
          <div className="experience_section">
            <div>
              <label className="experience_input-label">Nama Perusahaan</label>
              <input
                type="text"
                placeholder="Masukan nama perusahaan"
                className="experience_input"
              />
            </div>
            <div>
              <label className="experience_input-label">Tanggal Masuk</label>
              <input
                type="date"
                placeholder="Masukan Username IG"
                className="experience_input"
              />
            </div>
          </div>
          <div className="experience_section">
            <div className="experience_section">
              <div>
                <label className="experience_input-label">Posisi</label>
                <input
                  type="text"
                  placeholder="Masukan posisi"
                  className="experience_input"
                />
              </div>
              <div>
                <label className="experience_input-label">Tanggal Masuk</label>
                <input
                  type="date"
                  placeholder="Masukan Username Github"
                  className="experience_input"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <label className="experience_input-label">Deskripsi singkat</label>
          <input
            type="text-area"
            placeholder="Deskripsikan pekerjaan anda"
            className="experience_input-desc"
          />
        </div>
        <div className="experience_save-button">Tambah pengalaman kerja</div>
      </div>
      <Modal show={showModal} size="m" centered className="modal modal-lg">
        <Modal.Title className="modal-title experience_modal__title">
          Pengalaman Kerja
        </Modal.Title>
        <Modal.Body className="modal-body">
          <div className="experience_input-section">
            <div className="experience_column">
              <div className="experience_section">
                <div>
                  <label className="experience_input-label">
                    Nama Perusahaan
                  </label>
                  <input
                    type="text"
                    placeholder="Masukan nama perusahaan"
                    className="experience_input"
                    name="company"
                    onChange={formHandler}
                  />
                </div>
                <div>
                  <label className="experience_input-label">
                    Tanggal Masuk
                  </label>
                  <input
                    type="date"
                    placeholder="Masukan Username IG"
                    className="experience_input"
                    name="start_date"
                    onChange={formHandler}
                  />
                </div>
              </div>
              <div className="experience_section">
                <div className="experience_section">
                  <div>
                    <label className="experience_input-label">Posisi</label>
                    <input
                      type="text"
                      placeholder="Masukan posisi"
                      className="experience_input"
                      name="title"
                      onChange={formHandler}
                    />
                  </div>
                  <div>
                    <label className="experience_input-label">
                      Tanggal Keluar
                    </label>
                    <input
                      type="date"
                      placeholder="Masukan Username Github"
                      className="experience_input"
                      name="end_date"
                      onChange={formHandler}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label className="experience_input-label">
                Deskripsi singkat
              </label>
              <input
                type="text-area"
                placeholder="Deskripsikan pekerjaan anda"
                className="experience_input-desc"
                name="detail"
                onChange={formHandler}
              />
            </div>
          </div>
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
              onClick={addExperienceHandler}
            >
              Simpan
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
          <Toast.Body>Your experience is updated</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default experience;
