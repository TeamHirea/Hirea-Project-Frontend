import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Toast, ToastContainer } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addExperience,
  getExperience,
  updateExperience,
  deleteExperience,
} from "../../redux/action/experience";

function experience() {
  const id = localStorage.getItem("id");
  const [showModal, setShowModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [form, setForm] = useState({});
  const [updateForm, setUpdateForm] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [activeExperienceId, setActiveExperienceId] = useState("");
  const [activeItem, setActiveItem] = useState({});
  const experience = useSelector((state) => state.experience.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExperience(id));
  }, []);
  const formHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const updateFormHandler = (e) => {
    setUpdateForm({ ...updateForm, [e.target.name]: e.target.value });
  };
  const addExperienceHandler = async () => {
    setIsLoading(true);
    await dispatch(addExperience({ ...form, id_jobseeker: id }));
    await dispatch(getExperience(id));
    setShowModal(false);
    setShowToast(true);
    setIsLoading(false);
  };
  const removeExperienceHandler = async () => {
    setIsLoading(true);
    await dispatch(deleteExperience(activeExperienceId));
    await dispatch(getExperience(id));
    setActiveExperienceId("");
    setShowRemoveModal(false);
    setShowToast(true);
    setIsLoading(false);
  };
  const updateExperienceHandler = async () => {
    setIsLoading(true);
    await dispatch(updateExperience(updateForm, activeItem.id));
    await dispatch(getExperience(id));
    setShowUpdateModal(false);
    setShowToast(true);
    setIsLoading(false);
  };

  return (
    <div className="experience_personal">
      <div className="experience_personal-title">Pengalaman Kerja</div>
      {experience
        ? experience.map((item, index) => {
            return (
              <div className="experience_item-container" key={index}>
                <div>
                  <div className="experience_item-job">{item.title}</div>
                  <div className="experience_item-company">{item.company}</div>
                </div>
                <div>
                  <div
                    className="experience_item-button"
                    onClick={() => {
                      setShowUpdateModal(true);
                      setActiveItem(item);
                    }}
                  >
                    Edit
                  </div>
                  <div
                    className="experience_item-button"
                    onClick={() => {
                      setShowRemoveModal(true);
                      setActiveExperienceId(item.id);
                    }}
                  >
                    Hapus
                  </div>
                </div>
              </div>
            );
          })
        : ""}
      <div className="experience_input-section">
        <div
          className="experience_save-button"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Tambah pengalaman kerja
        </div>
      </div>
      <Modal show={showModal} size="m" centered className="modal">
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
              setForm({});
              setShowModal(false);
            }}
          >
            Batal
          </button>
        </div>
      </Modal>
      <Modal show={showUpdateModal} size="m" centered className="modal">
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
                    onChange={updateFormHandler}
                    defaultValue={activeItem.company}
                  />
                </div>
                <div>
                  <label className="experience_input-label">
                    Tanggal Masuk
                  </label>
                  <input
                    type="date"
                    className="experience_input"
                    name="start_date"
                    onChange={updateFormHandler}
                    defaultValue={activeItem.start_date}
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
                      onChange={updateFormHandler}
                      defaultValue={activeItem.title}
                    />
                  </div>
                  <div>
                    <label className="experience_input-label">
                      Tanggal Keluar
                    </label>
                    <input
                      type="date"
                      className="experience_input"
                      name="end_date"
                      onChange={updateFormHandler}
                      defaultValue={activeItem.end_date}
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
                onChange={updateFormHandler}
                defaultValue={activeItem.detail}
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
              onClick={updateExperienceHandler}
            >
              Simpan
            </button>
          )}

          <button
            className="experience_modal__button-pasive"
            onClick={() => {
              setUpdateForm({});
              setActiveItem({});
              setShowUpdateModal(false);
            }}
          >
            Batal
          </button>
        </div>
      </Modal>
      <Modal
        show={showRemoveModal}
        size="s"
        centered
        className="modal modal-md"
      >
        <Modal.Title className="modal-title text-center mt-2">
          Hapus
        </Modal.Title>
        <Modal.Body className="modal-body text-center">
          Apakah anda yakin untuk <br />
          menghapus pengalaman kerja ini?
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
              onClick={removeExperienceHandler}
            >
              Hapus
            </button>
          )}

          <button
            className="experience_modal__button-pasive"
            onClick={() => {
              setShowRemoveModal(false);
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
          <Toast.Body>Your experience is updated</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default experience;
