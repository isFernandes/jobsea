import {getAllProject, getProject} from "../../services/projectServices";
//TYPES
const SET_PROJECT = "SET_PROJECT";
const SET_ALL_PROJECTS = "SET_ALL_PROJECTS";

//REDUCER

const initialState = {
  allProjects: [],
  selectedProject: null,
};

export default function (state = initialState, action:any) {
  const { type, payload } = action;

  switch (type) {
    case SET_PROJECT:
      return {
        ...state,
        selectedProject :payload,
      };
    case SET_ALL_PROJECTS:
      return {
        ...state,
        allProjects:payload,
      };

    default:
      return state;
  }
}

//ACTIONS
export const setProject = (id:number) => (dispatch:any) => {
  
  return getProject(id).then(
    (response:any) => {
      dispatch({
        type: SET_PROJECT,
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
export const setAllProject = () => (dispatch:any) => {
  
  return getAllProject().then(
    (response:any) => {
      dispatch({
        type: SET_ALL_PROJECTS,
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

      return Promise.reject();
    }
  );
};
