const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  errorMessage: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
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
        errorMessage: action.payload.data.message,
      };
    default: {
      return state;
    }
  }
};

export default userReducer;
