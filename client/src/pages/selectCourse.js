import React from "react";

import { Container } from "reactstrap";
import { useSnackbar } from "notistack";

import CourseForm from "../components/courseForm";

function Selectcourse() {
  const { closeSnackbar } = useSnackbar();

  closeSnackbar();

  return (
    <Container>
      <h3 className="ml-4 text-success font-weight-light styled-text mb-3">
        Course Details
      </h3>
      <CourseForm />
    </Container>
  );
}

export default Selectcourse;
