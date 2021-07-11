import { useState, useEffect } from "react";
import { Container, Button, Card, Input, Col, Row } from "reactstrap";
import { Camera, X } from "react-feather";

import { connect } from "react-redux";

import { useSnackbar } from "notistack";

import QrReaderComponent from "../components/qrReader";
import { doVibrate, verifyCandidate } from "../utils";
import avatar from "../assets/images/user-avatar.svg.png";

import { onScanSuccess } from "../actions/candidatesActions";

function ScanPage({
  dispatch,
  course,
  registeredCandidates,
  verifiedCandidates,
}) {
  const [openCam, setOpenCam] = useState(false);
  const [result, setResult] = useState(null);

  const { enqueueSnackbar } = useSnackbar("");

  useEffect(() => {
    if (result === null) return;
    if (result) {
      enqueueSnackbar("Verified", { variant: "success" });
      dispatch(onScanSuccess(result));
    } else {
      enqueueSnackbar("Not Verified", { variant: "error" });
    }
  }, [result, enqueueSnackbar, dispatch]);

  const toggleScan = () => setOpenCam(!openCam);

  const handleScan = (data) => {
    if (data) {
      doVibrate(300);
      setResult(verifyCandidate(registeredCandidates, data));
      toggleScan();
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
          <h4>Scans: {verifiedCandidates.length}</h4>
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
              <p>{result.Name}</p>
              <h4>Matric No.:</h4>
              <p>{result.Matric_num}</p>
              <h4>Level:</h4>
              <p>{result.Level}</p>
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
  registeredCandidates: state.candidates.registeredCandidates,
  verifiedCandidates: state.candidates.verifiedCandidates,
});

export default connect(mapStateToProps)(ScanPage);
