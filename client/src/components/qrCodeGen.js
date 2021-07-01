import QRCode from "react-qr-code";

import { Container, Row, Col } from "reactstrap";

const QrCode = () => {
  return (
    <Container>
      <Row>
        <Col className="col-sm-12 col-md-6 offset-md-3 mt-4">
          <QRCode value="u16/fns/csc/1024" />
        </Col>
      </Row>
    </Container>
  );
};

export default QrCode;
