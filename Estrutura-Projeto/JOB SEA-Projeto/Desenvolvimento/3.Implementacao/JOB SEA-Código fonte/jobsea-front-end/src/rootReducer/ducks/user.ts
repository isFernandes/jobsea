//TYPES
const SET_USER = "SET_USER";

//REDUCER

const initialState = {};

export default function (state = initialState, action:any) {
  const { type, payload } = action;

  switch (type) {
    case SET_USER:
      return {
        ...state,
        payload,
      };

    default:
      return state;
  }
}

//ACTIONS

