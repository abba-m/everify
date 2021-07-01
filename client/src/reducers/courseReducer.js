import * as actions from "../actions/courseActions";
import { LOGOUT_SUCCESS } from "../actions/authActions";

export const initialState = {
  faculty: "Select faculty",
  department: "Select department",
  course: "Select course",
};

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CHANGE_FACULTY:
      return { ...state, faculty: action.payload };
    case actions.CHANGE_DEPARTMENT:
      return { ...state, department: action.payload };
    case actions.CHANGE_COURSE:
      return { ...state, course: action.payload };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        faculty: "Select faculty",
        department: "Select faculty",
        course: "Select faculty",
      };
    default:
      return state;
  }
}
