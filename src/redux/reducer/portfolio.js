const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PORTFOLIO_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_PORTFOLIO_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false,
        isError: false,
        errorMessage: "",
      };
    case "GET_PORTFOLIO_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.response.data.message,
        data: [],
      };
    case "ADD_PORTFOLIO_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "ADD_PORTFOLIO_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: "",
      };
    case "ADD_PORTFOLIO_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.response.data.message,
      };
    case "UPDATE_PORTFOLIO_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "UPDATE_PORTFOLIO_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: "",
      };
    case "UPDATE_PORTFOLIO_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.response.data.message,
      };
    case "DELETE_PORTFOLIO_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "DELETE_PORTFOLIO_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: "",
      };
    case "DELETE_PORTFOLIO_REJECTED":
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

export default portfolioReducer;
