//import { useSnackbar } from "notistack";

export const USER_LOADING = "USER_LOADING";
export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
};

export const login =
  ({ identifier, password }) =>
  (dispatch) => {
    const body = JSON.stringify({ identifier, password });

    return (
      fetch("auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      })
        .then((res) => {
          if (res.status !== 200 && res.status !== 201)
            return dispatch({ type: LOGIN_FAIL });

          return dispatch({ type: LOGIN_SUCCESS, payload: res.json() });
        })
        // .then((data) => {
        //   dispatch({ type: LOGIN_SUCCESS, payload: data });
        // })
        .catch((err) => {
          console.log(err);
          dispatch({ type: LOGIN_FAIL });
        })
    );
  };

export const logout = () => {
  return { type: LOGOUT_SUCCESS };
};

export const tokenConfig = (getState) => {
  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //if token, add to headers
  if (token) config.headers["Authorization"] = `Bearer ${token}`;
};
