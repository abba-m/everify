import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useSnackbar } from "notistack";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

//Local imports
import { useInput } from "../hooks/input_hook";
import { login } from "../actions/authActions";

function LoginForm({ dispatch, isAuthenticated, isLoading }) {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const { value: email, bind: bindEmail } = useInput("");
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Check if email and/or password field isEmpty
    if (!(email && password))
      return enqueueSnackbar("Email and password needed for login", {
        variant: "warning",
      });

    const loginCredentials = {
      identifier: email,
      password,
    };

    //enqueueSnackbar("Processing Login", { variant: "info" });
    dispatch(login(loginCredentials));

    if (isAuthenticated) history.push("/home");

    resetPassword();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="email" className="text-muted">
          Email
        </Label>
        <Input type="email" name="email" id="email" {...bindEmail} required />
      </FormGroup>
      <FormGroup>
        <Label for="password" className="text-muted">
          Password
        </Label>
        <Input
          type="password"
          name="password"
          id="password"
          {...bindPassword}
          required
        />
      </FormGroup>
      <Button color="secondary" block disabled={isLoading}>
        {isLoading ? "Please wait..." : "Login"}
      </Button>
    </Form>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
});

export default connect(mapStateToProps)(LoginForm);
