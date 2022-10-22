const initialState = {
  data: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
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

export default userReducer;
