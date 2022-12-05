const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  errorMessage: "",
  pagination: 0,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROFILE_JOBSEEKER_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_PROFILE_JOBSEEKER_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data[0],
        isLoading: false,
        isError: false,
        errorMessage: "",
      };
    case "GET_PROFILE_JOBSEEKER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.response.data.message,
        data: {},
      };
    case "GET_ALL_JOBSEEKER_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_ALL_JOBSEEKER_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false,
        isError: false,
        errorMessage: "",
        pagination: action.payload.data.pagination,
      };
    case "GET_ALL_JOBSEEKER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.response.data.message,
        data: {},
      };
    case "UPDATE_PROFILE_JOBSEEKER_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "UPDATE_PROFILE_JOBSEEKER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: "",
      };
    case "UPDATE_PROFILE_JOBSEEKER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.data.message,
      };
    case "UPDATE_PASSWORD_JOBSEEKER_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "UPDATE_PASSWORD_JOBSEEKER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: "",
      };
    case "UPDATE_PASSWORD_JOBSEEKER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.response.data.message,
      };
    case "GET_DATA_USER_JOBSEEKER_PENDING":
      return {
        ...state,
        data: [],
      };
    case "GET_DATA_USER_JOBSEEKER_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data,
      };
    case "GET_DATA_USER_JOBSEEKER_REJECTED":
      return {
        ...state,
        data: [],
      };
    case "GET_DATA_USER_JOBSEEKER_ID_PENDING":
      return {
        ...state,
        data: [],
      };
    case "GET_DATA_USER_JOBSEEKER_ID_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data[0],
      };
    case "GET_DATA_USER_JOBSEEKER_ID_REJECTED":
      return {
        ...state,
        data: [],
      };
    case "GET_DATA_USER_RECRUITER_ID_PENDING":
      return {
        ...state,
        data: [],
      };
    case "GET_DATA_USER_RECRUITER_ID_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data[0],
        isLoading: false,
        isError: false,
        errorMessage: "",
      };
    case "GET_DATA_USER_RECRUITER_ID_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.response.data.message,
        data: {},
      };
    case "UPDATE_PROFILE_RECRUITER_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "UPDATE_PROFILE_RECRUITER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: "",
      };
    case "UPDATE_PROFILE_RECRUITER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.response.data.message,
      };
    default: {
      return state;
    }
  }
};

export default userReducer;
