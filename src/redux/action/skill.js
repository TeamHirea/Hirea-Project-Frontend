import axios from "../../utils/axios";

export const getSkill = (id) => ({
  type: "GET_SKILL",
  payload: axios.get(`/api/skill/${id}`),
});

export const updateSkill = (id, form) => ({
  type: "UPDATE_SKILL",
  payload: axios.post(`/api/skill/${id}`, form),
});

export const deleteSkill = (id, body) => ({
  type: "DELETE_SKILL",
  payload: axios.delete(`/api/skill/${id}`, { data: body }),
});
