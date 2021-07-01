import React from "react";
import QrReader from "react-qr-reader";

import { Row, Col } from "reactstrap";
import { XCircle } from "react-feather";

const QrReaderComponent = (props) => {
  return (
    <Row className="scan-box">
      <Col>
        <QrReader
          delay={300}
          onError={props.handleError}
          onScan={props.handleScan}
          style={{ width: "100vw" }}
        />
        <XCircle className="close-cam" onClick={props.toggleScan} size="3em" />
      </Col>
    </Row>
  );
};

export default QrReaderComponent;
