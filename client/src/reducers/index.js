import { combineReducers } from "redux";

import courseReducer from "./courseReducer";
import authReducer from "./authReducer";
import candidatesReducer from "./candidatesReducer";

const rootReducer = combineReducers({
  courseDetails: courseReducer,
  auth: authReducer,
  candidates: candidatesReducer,
});

export default rootReducer;
