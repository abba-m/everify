import { Container } from "reactstrap";

function Settings() {
  return (
    <Container>
      <h3 className="ml-4 text-success font-weight-light styled-text mb-3">
        Settings
      </h3>
      <p>vibrate on scan</p> <p>off</p>
    </Container>
  );
}

export default Settings;
