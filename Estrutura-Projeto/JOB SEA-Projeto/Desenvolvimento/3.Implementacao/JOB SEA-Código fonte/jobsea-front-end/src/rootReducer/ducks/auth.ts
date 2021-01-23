import {createUser} from "../../services/userServices";
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
export const setUser = (data: object) => (dispatch:any) => {
  
  return createUser(data).then(
    (response:any) => {
      dispatch({
        type: SET_USER,
        payload: response.data,
      });
      return Promise.resolve();
    },
    (error:any) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

        console.log(message);

      // dispatch({
      //   type: SET_MESSAGE,
      //   payload: message,
      // });

      return Promise.reject();
    }
  );
};
