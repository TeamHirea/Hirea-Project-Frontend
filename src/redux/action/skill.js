import axios from "../../utils/axios";

export const getSkill = (id) => ({
  type: "GET_SKILL",
  payload: axios.get(`/api/skill/${id}`),
});

export const updateSkill = (id, form) => ({
  type: "UPDATE_SKILL",
  payload: axios.patch(`/api/skill/${id}`, form),
});
