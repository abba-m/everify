import { useState } from "react";
import QRCode from "react-qr-code";

import { Container, Row, Col, Button } from "reactstrap";

const QrCode = () => {
  const [matric, setMatric] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //set Qr value
    setValue(matric);
  };

  return (
    <Container>
      <Row>
        <Col className="col-sm-12 col-md-6 offset-md-3 mt-4">
          {value && <QRCode value={value} className="mt-3" />}
        </Col>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={matric}
            onChange={(e) => setMatric(e.target.value)}
            placeholder="Input matric num"
            className="form-control m-3 p-4"
          />
          <Button type="submit" className="m-3">
            Submit
          </Button>
        </form>
      </Row>
    </Container>
  );
};

export default QrCode;
