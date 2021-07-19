export const USER_LOADING = "USER_LOADING";
export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";
export const PROCESS_LOGIN = "PROCESS_LOGIN";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  //get token from local storage
  //const token = getState().auth.token

  //tokenConfig(getState)
};

export const login =
  ({ identifier, password }) =>
  async (dispatch) => {
    const body = JSON.stringify({ identifier, password });

    dispatch(processLogin);

    try {
      const res = await fetch(
        `https://shielded-shelf-39918.herokuapp.com/auth/local`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body,
        }
      );

      //if Login fails
      if (!res.ok) {
        dispatch({ type: LOGIN_FAIL });
        const data = await res.json();
        console.log(data);
        //TODO: add an error/message state
        alert("Login failed: Invalid login credentials");
        return;
      }

      const data = await res.json();
      return dispatch({ type: LOGIN_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: LOGIN_FAIL });
      //TODO: add err message to app state
      alert("Login Failed: Server error.");
      console.log(err);
    }
  };

export const processLogin = () => ({ type: PROCESS_LOGIN });

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
