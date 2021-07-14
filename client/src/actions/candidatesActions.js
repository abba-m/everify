export const GET_CANDIDATES = "GET_CANDIDATES";
export const GET_CANDIDATES_SUCCESS = "GET_CANDIDATES_SUCCESS";
export const GET_CANDIDATES_FAILURE = "GET_CANDIDATES_FAILURE";

export const ON_SCAN_SUCCESS = "ON_SCAN_SUCCESS";

export const getCandidates = () => ({
  type: GET_CANDIDATES,
});

export const getCandidatesSuccess = (data) => ({
  type: GET_CANDIDATES_SUCCESS,
  payload: data,
});

export const getCandidatesFailure = () => ({
  type: GET_CANDIDATES_FAILURE,
});

export const onScanSuccess = (data) => ({
  type: ON_SCAN_SUCCESS,
  payload: data,
});

export function fetchCandidates(courseCode) {
  return async (dispatch) => {
    dispatch(getCandidates());

    try {
      const response = await fetch(
        `https://shielded-shelf-39918.herokuapp.com/courses?Code=${courseCode}`
      );
      const res = await response.json();
      const data = await res[0].students;

      dispatch(getCandidatesSuccess(data));
    } catch (error) {
      dispatch(getCandidatesFailure());
    }
  };
}
