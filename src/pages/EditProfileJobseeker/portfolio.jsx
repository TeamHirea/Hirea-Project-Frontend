import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePortfolio,
  getPortfolio,
  addPortfolio,
  updatePortfolio,
} from "../../redux/action/portfolio";
import { Toast, ToastContainer, Modal } from "react-bootstrap";

function personal() {
  const id = localStorage.getItem("id");
  const [showModal, setShowModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [activePortfolioId, setActivePortfolioId] = useState("");
  const [setForm] = useState({});
  const [image, setImage] = useState("");
  const [activeItem, setActiveItem] = useState({});
  const [updateForm, setUpdateForm] = useState({});
  const dispatch = useDispatch();
  const portfolioData = useSelector((state) => state.portfolio.data);
  const errorMessage = useSelector((state) => state.portfolio.errorMessage);

  useEffect(() => {
    dispatch(getPortfolio(id));
  }, []);

  // const formHandler = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };
  const updateFormHandler = (e) => {
    setUpdateForm({ ...updateForm, [e.target.name]: e.target.value });
  };
  const removePortfolioHandler = async () => {
    try {
      setIsLoading(true);
      await dispatch(deletePortfolio(activePortfolioId));
      await dispatch(getPortfolio(id));
      setActivePortfolioId("");
      setShowRemoveModal(false);
      setShowToast(true);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setShowErrorToast(true);
    }
  };
  const addPortfolioHandler = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      // formData.append("name", form.name);
      for (const data in updateForm) {
        formData.append(data, updateForm[data]);
      }
      formData.append("idJobseeker", localStorage.getItem("id"));

      await dispatch(addPortfolio(formData));
      await dispatch(getPortfolio(localStorage.getItem("id")));
      setShowModal(false);
      setShowToast(true);
      setIsLoading(false);
      // setUpdateForm({ ...updateForm, idJobseeker: localStorage.getItem("id") });
    } catch (error) {
      setShowErrorToast(true);
      setIsLoading(false);
    }
  };
  const updatePortfolioHandler = async () => {
    try {
      setIsLoading(true);
      await dispatch(updatePortfolio(updateForm, activeItem.id));
      // await dispatch(getPortfolio(id));
      setShowUpdateModal(false);
      setShowToast(true);
      setIsLoading(false);
    } catch (error) {
      setShowErrorToast(true);
      setIsLoading(false);
    }
  };

  const handleChangeFormUpdate = (e) => {
    e.preventDefault();
    if (e.target.name === "image") {
      setUpdateForm({ ...updateForm, [e.target.name]: e.target.files[0] });
      setImage(URL.createObjectURL(e.target.files[0]));
    } else {
      setUpdateForm({ ...updateForm, [e.target.name]: e.target.value });
    }
  };

  console.log(portfolioData);

  return (
    <div className="portfolio_personal">
      <div className="portfolio_personal-title">Portofolio</div>
      {portfolioData ? (
        portfolioData.map((item, index) => {
          return (
            <div className="portfolio_item" key={index}>
              <div className="portfolio_item-container">
                <img
                  src={
                    item.image
                      ? `https://res.cloudinary.com/dnkor5xbu/image/upload/v1666345717/${item.image}`
                      : require("../../assets/images/picture-empty.jpg")
                  }
                  alt="portfolio"
                  className="portfolio_item-image"
                />
                <div className="portfolio_item-title">{item.title}</div>
              </div>
              <div className="portfolio_item-container">
                <div
                  className="portfolio_item-button"
                  onClick={() => {
                    setShowUpdateModal(true);
                    setActiveItem(item);
                  }}
                >
                  Edit
                </div>
                <div
                  className="portfolio_item-button"
                  onClick={() => {
                    setShowRemoveModal(true);
                    setActivePortfolioId(item.id);
                  }}
                >
                  Hapus
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <></>
      )}
      <div className="portfolio_input-section">
        <div
          className="portfolio_save-button"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Tambah portofolio
        </div>
      </div>
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
          menghapus portofolio ini?
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
              onClick={removePortfolioHandler}
            >
              Hapus
            </button>
          )}

          <button
            className="experience_modal__button-pasive"
            onClick={() => {
              setShowRemoveModal(false);
              setActivePortfolioId("");
            }}
          >
            Batal
          </button>
        </div>
      </Modal>
      <Modal show={showModal} size="m" centered className="modal">
        <Modal.Title className="modal-title experience_modal__title">
          Pengalaman Kerja
        </Modal.Title>
        <Modal.Body className="modal-body">
          <div className="portfolio_input-section">
            <div>
              <label className="portfolio_input-label">Nama aplikasi</label>
              <input
                type="text"
                placeholder="Masukan nama aplikasi"
                className="portfolio_input"
                name="title"
                onChange={handleChangeFormUpdate}
              />
            </div>
            <div>
              <label className="portfolio_input-label">Link repository</label>
              <input
                type="text"
                placeholder="Masukan link repository"
                className="portfolio_input"
                name="url"
                onChange={handleChangeFormUpdate}
              />
            </div>
            <div>
              <label className="portfolio_input-label">Upload gambar</label>
              <input
                type="file"
                placeholder="Upload gambar"
                className="portfolio_input"
                name="image"
                onChange={handleChangeFormUpdate}
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
              onClick={addPortfolioHandler}
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
          <div className="portfolio_input-section">
            <div>
              <label className="portfolio_input-label">Nama aplikasi</label>
              <input
                type="text"
                placeholder="Masukan nama aplikasi"
                className="portfolio_input"
                name="title"
                onChange={updateFormHandler}
                defaultValue={activeItem.title}
              />
            </div>
            <div>
              <label className="portfolio_input-label">Link repository</label>
              <input
                type="text"
                placeholder="Masukan link repository"
                className="portfolio_input"
                name="url"
                onChange={updateFormHandler}
                defaultValue={activeItem.url}
              />
            </div>
            <div>
              <label className="portfolio_input-label">Upload gambar</label>
              <input
                type="file"
                placeholder="Upload gambar"
                className="portfolio_input"
                name="image"
                // onChange={updateFormHandler}
              />
              {image && (
                <img
                  src={image}
                  className="profile_profile-image"
                  alt="view image"
                />
              )}
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
              onClick={updatePortfolioHandler}
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
          <Toast.Body>Your portfolio has been updated</Toast.Body>
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

export default personal;
