import { combineReducers, createStore,applyMiddleware } from "redux";
import auth from "./ducks/auth";
import user from "./ducks/user";
import project from "./ducks/project";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducers =  combineReducers({
    auth, user, project
});
const middleware = [thunk];

const store:any = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

