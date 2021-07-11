import * as actions from "../actions/candidatesActions";
import { CHANGE_COURSE } from "../actions/courseActions";
import { LOGOUT_SUCCESS } from "../actions/authActions";

export const initialState = {
  registeredCandidates: [],
  verifiedCandidates: [],
  isLoading: false,
  //TODO: errors: null,
};

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_CANDIDATES:
      return { ...state, isLoading: true };
    case actions.GET_CANDIDATES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        registeredCandidates: action.payload,
      };
    case actions.GET_CANDIDATES_FAILURE:
      return {
        ...state,
        isLoading: false,
        //TODO: errors: action.payload
      };
    case actions.ON_SCAN_SUCCESS:
      return {
        ...state,
        verifiedCandidates: [
          ...new Set([...state.verifiedCandidates, action.payload]),
        ],
      };
    case CHANGE_COURSE:
      return {
        ...state,
        verifiedCandidates: [],
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        registeredCandidates: [],
        verifiedCandidates: [],
        isLoading: false,
        //TODO: errors: null,
      };
    default:
      return state;
  }
}
