import { combineReducers } from "redux";

import courseReducer from "./courseReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  courseDetails: courseReducer,
  auth: authReducer,
});

export default rootReducer;
