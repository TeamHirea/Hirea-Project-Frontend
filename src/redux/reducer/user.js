const initialState = {
  data: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNIN_PENDING":
      return {
        ...state,
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
    default: {
      return state;
    }
  }
};

export default userReducer;
