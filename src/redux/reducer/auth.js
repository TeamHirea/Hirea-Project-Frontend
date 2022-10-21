const initialState = {
  //   data: [], // UNTUK MENAMPUNG LIST DATA
  message: "",
};
const auth = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_JOBSEEKER_PENDING": {
      return {
        ...state,
        // data: [],
      };
    }
    case "SIGNUP_JOBSEEKER_FULFILLED": {
      return {
        ...state,
        // data: action.payload.data.data,
        message: action.payload.data.message,
      };
    }
    case "SIGNUP_JOBSEEKER_REJECTED": {
      return {
        ...state,
        // data: [],
      };
    }
    case "SIGNUP_RECRUITER_PENDING": {
      return {
        ...state,
        // data: [],
      };
    }
    case "SIGNUP_RECRUITER_FULFILLED": {
      return {
        ...state,
        // data: action.payload.data.data,
        message: action.payload.data.message,
      };
    }
    case "SIGNUP_RECRUITER_REJECTED": {
      return {
        ...state,
        // data: [],
      };
    }
    default: {
      return state;
    }
  }
};
export default auth;
