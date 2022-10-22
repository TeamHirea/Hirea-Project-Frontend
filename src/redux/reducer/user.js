const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  errorMessage: "",
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
    default: {
      return state;
    }
  }
};

export default userReducer;
