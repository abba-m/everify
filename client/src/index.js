import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//App state/store imports
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

//App store - redux
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

import { SnackbarProvider } from "notistack";
import Slide from "@material-ui/core/Slide";

import "./styles/custom.scss";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      maxSnack={2}
      TransitionComponent={Slide}
      dense
    >
      <Provider store={store}>
        <App />
      </Provider>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
