import { combineReducers, createStore,applyMiddleware } from "redux";
import auth from "./ducks/auth";
import user from "./ducks/user";
import project from "./ducks/project";
import message from "./ducks/message";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducers =  combineReducers({
    auth, user, project, message
});
const middleware = [thunk];

const store:any = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

