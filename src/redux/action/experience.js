import axios from "../../utils/axios";

export const getUserJobseekerExperienceById = (id) => {
  return {
    type: "GET_DATA_USER_JOBSEEKER_EXPERIENCE_ID",
    payload: axios.get(`/api/experience/${id}`),
  };
};
