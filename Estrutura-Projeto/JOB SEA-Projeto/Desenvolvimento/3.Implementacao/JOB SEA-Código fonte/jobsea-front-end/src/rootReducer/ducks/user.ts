import { subProject, updateUser } from "../../services/userServices";
//TYPES
const SET_USER = "SET_USER";
const SUB_PROJECT = "SUB_PROJECT";
const SET_MESSAGE = "SET_MESSAGE";
const UPDATE_USER = "UPDATE_USER";


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
    case SUB_PROJECT:
      return {
        ...state,
        payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        payload,
      };

    default:
      return state;
  }
}

//ACTIONS


export const subscribeProject = (userId:string, projectId:string) => async (dispatch:any) => {
  console.log("action")
  console.log(userId, projectId);
  return await subProject(userId, projectId).then(
    (response:any) => {
      dispatch({
        type: SUB_PROJECT,
        payload: response.data,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
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

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
export const updateProfile = (userId:string, newData:object) => async (dispatch:any) => {
  
  return await updateUser(userId, newData).then(
    (response:any) => {
      dispatch({
        type: UPDATE_USER,
        payload: response.data.user,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
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

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
