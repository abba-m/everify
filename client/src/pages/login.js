import { Row, Col } from "reactstrap";

import logo from "../assets/images/logo.png";
import LoginForm from "../components/loginForm";

function Login() {
  return (
    <div className="login-container">
      <Row className="h-100 my-auto my-md-5">
        <Col sm="12" md="6" className="align-self-center m-auto">
          <div className="login-img">
            <img src={logo} alt="ibbul logo" />
          </div>
          <div>
            <h4 className="text-success mt-4 mb-sm-3 text-center text-md-nowrap styled-text">
              UG E-Verification Portal
            </h4>
          </div>
        </Col>
        <Col sm="12" md="6" className="align-self-center px-5 login-form">
          <h4 className="text-muted text-center mb-3">Admin Login</h4>
          <LoginForm />
        </Col>
      </Row>
    </div>
  );
}

export default Login;
