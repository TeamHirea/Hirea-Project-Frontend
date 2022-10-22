import axios from "../../utils/axios";

export const getExperience = (id) => ({
  type: "GET_EXPERIENCE",
  payload: axios.get(`/api/experience/${id}`),
});

export const updateExperience = (form, id) => ({
  type: "UPDATE_EXPERIENCE",
  payload: axios.patch(`/api/experience/${id}`, form),
});

export const addExperience = (form) => ({
  type: "ADD_EXPERIENCE",
  payload: axios.post(`/api/experience`, form),
});
