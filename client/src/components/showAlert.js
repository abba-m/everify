import { Alert, Row, Col } from "reactstrap";
import { UserCheck, XCircle } from "react-feather";

export function SuccessAlert() {
  return (
    <Alert
      style={{
        borderRadius: "50px",
        border: "1px solid #304D6D",
        marginTop: "130px",
      }}
      color="success"
    >
      <Row>
        <Col xs="3">
          <UserCheck size="2em" />
        </Col>
        <Col xs="auto styled-text">
          <h4>Verified</h4>
        </Col>
      </Row>
    </Alert>
  );
}

export function FailureAlert() {
  return (
    <Alert
      style={{
        borderRadius: "50px",
        border: "1px solid #304D6D",
        marginTop: "130px",
      }}
      color="danger"
    >
      <Row>
        <Col xs="3">
          <XCircle size="2em" />
        </Col>
        <Col xs="auto styled-text">
          <h4>Not Verified</h4>
        </Col>
      </Row>
    </Alert>
  );
}

export default function ShowAlert({ showAlert }) {
  if (showAlert == null) return null;
  if (showAlert) return <SuccessAlert />;
  return <FailureAlert />;
}
