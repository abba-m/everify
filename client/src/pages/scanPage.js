import { useState } from "react";
import { Container, Button, Card, Input, Col, Row } from "reactstrap";
import { Camera, X } from "react-feather";

import { connect } from "react-redux";

import QrReaderComponent from "../components/qrReader";
import { doVibrate, verifyCandidate } from "../utils";
import avatar from "../assets/images/user-avatar.svg.png";

import { useSnackbar } from "notistack";

function ScanPage({ course }) {
  const [openCam, setOpenCam] = useState(false);
  const [result, setResult] = useState();

  const { enqueueSnackbar } = useSnackbar();

  const toggleScan = () => setOpenCam(!openCam);

  const handleScan = (data) => {
    if (data) {
      doVibrate(300);
      setResult(verifyCandidate(data));
      toggleScan();
      enqueueSnackbar("Verified", { variant: "success" });
    }
  };

  const handleError = (err) => {
    console.error(err);
    toggleScan();
    enqueueSnackbar("Error! Please try again.", { variant: "error" });
  };

  return (
    <Container>
      <h3 className="ml-4 text-success font-weight-light styled-text mb-3">
        Scan
      </h3>
      <div className="d-scan-page-grid">
        <div className="d-scan-page-select styled-text">
          <Input type="select">
            <option>{course}</option>
          </Input>
        </div>
        <div className="total-scan-display styled-text">
          <h4>Scans: 0</h4>
        </div>
      </div>
      <div className="d-scan-page-button">
        <Button onClick={toggleScan} className="shadow-sm my-5">
          <Camera size="1.4em" /> <span>SCAN</span>
        </Button>
      </div>

      {result && (
        <Card className="d-scan-page-card p-4">
          <p className="text-center font-weight-bold">Candidate Info</p>
          <X id="close-profile-card" onClick={() => setResult(null)} />
          {/* {<Spinner className="mx-auto" color="secondary" />} */}
          <Row>
            <Col>
              <h4>Name:</h4>
              <p>{result.name}</p>
              <h4>Matric No.:</h4>
              <p>{result.matric}</p>
              <h4>Level:</h4>
              <p>{result.level}</p>
            </Col>
            <Col>
              <img
                src={avatar}
                className="candidate-avatar"
                alt="candidate-avatar"
              />
            </Col>
          </Row>
        </Card>
      )}

      {openCam && (
        <QrReaderComponent
          toggleScan={toggleScan}
          handleError={handleError}
          handleScan={handleScan}
        />
      )}
    </Container>
  );
}

const mapStateToProps = (state) => ({
  course: state.courseDetails.course,
});

export default connect(mapStateToProps)(ScanPage);
