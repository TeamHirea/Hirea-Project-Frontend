import axios from "../../utils/axios";

export const getPortfolio = (id) => ({
  type: "GET_PORTFOLIO",
  payload: axios.get(`/api/portfolio/${id}`),
});

export const updatePortfolio = (form, id) => ({
  type: "UPDATE_PORTFOLIO",
  payload: axios.patch(`/api/portfolio/update/${id}`, form),
});

export const addPortfolio = (form) => ({
  type: "ADD_PORTFOLIO",
  payload: axios.post(`/api/portfolio/create`, form),
});

export const deletePortfolio = (id) => ({
  type: "DELETE_PORTFOLIO",
  payload: axios.delete(`/api/portfolio/delete/${id}`),
});
