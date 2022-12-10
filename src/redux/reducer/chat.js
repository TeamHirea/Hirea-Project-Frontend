const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

const chat = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "GET_MESSAGE_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_MESSAGE_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false,
        isError: false,
        errorMessage: "",
      };
    case "GET_MESSAGE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.response.data.message,
        data: [],
      };
    default: {
      return state;
    }
  }
};

export default chat;
