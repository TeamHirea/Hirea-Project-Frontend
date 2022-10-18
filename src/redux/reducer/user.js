const initialState = {
  data: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNIN_PENDING":
      return {
        ...state,
      };
    default: {
      return state;
    }
  }
};

export default userReducer;
