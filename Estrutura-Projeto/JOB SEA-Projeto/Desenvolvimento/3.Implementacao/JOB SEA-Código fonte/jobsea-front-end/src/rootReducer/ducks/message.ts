const SET_MESSAGE = "SET_MESSAGE";
const CLEAR_MESSAGE = "CLEAR_MESSAGE";

const initialState = {};

export default function (state = initialState, action:any) {
  const { type, payload } = action;

  switch (type) {
    case SET_MESSAGE:
      return { message: payload };

    case CLEAR_MESSAGE:
      return { message: "" };

    default:
      return state;
  }
}

export const setMessage = (message:any) => ({
    type: SET_MESSAGE,
    payload: message,
  });
  
export const clearMessage = () => ({
    type: CLEAR_MESSAGE,
  });