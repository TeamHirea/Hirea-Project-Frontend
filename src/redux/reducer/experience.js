const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_EXPERIENCE_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_EXPERIENCE_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false,
        isError: false,
        errorMessage: "",
      };
    case "GET_EXPERIENCE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.response.data.message,
        data: [],
      };
    case "ADD_EXPERIENCE_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "ADD_EXPERIENCE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: "",
      };
    case "ADD_EXPERIENCE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.response.data.message,
      };
    case "UPDATE_EXPERIENCE_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "UPDATE_EXPERIENCE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: "",
      };
    case "UPDATE_EXPERIENCE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.response.data.message,
      };
    case "DELETE_EXPERIENCE_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "DELETE_EXPERIENCE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: "",
      };
    case "DELETE_EXPERIENCE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.response.data.message,
      };
    case "GET_DATA_USER_JOBSEEKER_EXPERIENCE_ID_PENDING":
      return {
        ...state,
        data: [],
      };
    case "GET_DATA_USER_JOBSEEKER_EXPERIENCE_ID_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data[0],
      };
    case "GET_DATA_USER_JOBSEEKER_EXPERIENCE_ID_REJECTED":
      return {
        ...state,
        data: [],
      };
    default: {
      return state;
    }
  }
};

export default experienceReducer;
