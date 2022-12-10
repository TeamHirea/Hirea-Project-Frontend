import axios from "../../utils/axios";

export const getProfileJobseeker = (id) => ({
  type: "GET_PROFILE_JOBSEEKER",
  payload: axios.get(`/api/user/${id}`),
});

export const updateProfileJobseeker = (form, id) => ({
  type: "UPDATE_PROFILE_JOBSEEKER",
  payload: axios.patch(`/api/user/jobseeker/${id}`, form),
});

export const getUserJobseeker = (page, searchName, column) => {
  return {
    type: "GET_DATA_USER_JOBSEEKER",
    payload: axios.get(
      `api/user/?page=${page}&limit=4&column=${column}&order=true&search=${searchName}`
    ),
  };
};

export const getAllJobseeker = (page, filter, keyword) => {
  return {
    type: "GET_ALL_JOBSEEKER",
    payload: axios.get(
      `/api/user?limit=5&page=${page}&filter=${filter}&search=${keyword}`
    ),
  };
};

export const getUserJobseekerById = (id) => {
  return {
    type: "GET_DATA_USER_JOBSEEKER_ID",
    payload: axios.get(`/api/user/${id}`),
  };
};

export const getUserRecruiterById = (id) => {
  return {
    type: "GET_DATA_USER_RECRUITER_ID",
    payload: axios.get(`/api/user/recruiter/${id}`),
  };
};

export const updateProfileRecruiter = (form, id) => ({
  type: "UPDATE_PROFILE_JOBSEEKER",
  payload: axios.patch(`/api/user/recruiter/${id}`, form),
});

export const updatePasswordJobseeker = (form, id) => ({
  type: "UPDATE_PASSWORD_JOBSEEKER",
  payload: axios.patch(`/api/user/jobseeker/updatePassword/${id}`, form),
});
