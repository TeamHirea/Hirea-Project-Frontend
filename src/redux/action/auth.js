import axios from "../../utils/axios";

export const signupJobseeker = (body) => ({
  type: "SIGNUP_JOBSEEKER",
  payload: axios.post("/api/auth/register/jobseeker", body),
});
export const signupRecruiter = (body) => ({
  type: "SIGNUP_RECRUITER",
  payload: axios.post("/api/auth/register/recruiter", body),
});
export const confirmResetPassword = (body) => ({
  type: "CONFIRM_RESET_PASSWORD",
  payload: axios.post("/api/auth/resetPassword/recruiter", body),
});
