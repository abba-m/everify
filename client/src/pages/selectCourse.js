import React from "react";

import { Container } from "reactstrap";

import CourseForm from "../components/courseForm";

function Selectcourse() {
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
