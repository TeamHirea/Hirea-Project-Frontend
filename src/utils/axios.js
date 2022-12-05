import axios from "axios";

const axiosApiIntances = axios.create({
  baseURL: "https://hirea.vercel.app",
});

axiosApiIntances.interceptors.request.use(
  function (config) {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      refreshtoken: localStorage.getItem("refreshtoken"),
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosApiIntances.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
    if (error.response.status === 403) {
      if (
        error.response.data.message ===
        "Please sign in again, your token is expired"
      ) {
        axiosApiIntances
          .post("/api/auth/refresh")
          .then((res) => {
            localStorage.setItem("token", res.data.data.token);
            localStorage.setItem("refreshtoken", res.data.data.refreshToken);
            window.location.reload();
          })
          .catch(() => {
            localStorage.clear();
            // window.location.href = "/signin";
          });
      } else {
        localStorage.clear();
        // window.location.href = "/signin";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosApiIntances;
