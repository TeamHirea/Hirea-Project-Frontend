const initialState = {
  skill: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

const skillReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SKILL_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_SKILL_FULFILLED":
      return {
        ...state,
        skill: action.payload.data.data[0].skill,
        isLoading: false,
        isError: false,
        errorMessage: "",
      };
    case "GET_SKILL_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.response.data.message,
        skill: [],
      };
    default: {
      return state;
    }
  }
};

export default skillReducer;
