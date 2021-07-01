// import { useEffect } from "react";
import { useHistory } from "react-router-dom";
//import { Redirect, Route } from "react-router";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { connect } from "react-redux";
import { useSnackbar } from "notistack";

import {
  Faculties,
  generateDepartmentsList,
  generateCoursesList,
} from "../utils";
import {
  changeFaculty,
  changeDepartment,
  changeCourse,
} from "../actions/courseActions";

function CourseForm({ dispatch, faculty, department, course }) {
  // const [faculty, setFaculty] = useState("");
  // const [department, setDepartment] = useState("");
  // const [course, setCourse] = useState("");

  let departmentList = generateDepartmentsList(faculty),
    coursesList = generateCoursesList(department);

  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  // useEffect(() => {
  //   console.log({ faculty, department, course });
  // }, [faculty, department, course]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (course === "Select course") return enqueueSnackbar("Please fill out course details", {
      variant: "warning"
    });

    history.push("/home/scan/");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="faculty" className="text-muted">
          Faculty
        </Label>
        <Input
          type="select"
          name="faculty"
          id="faculty"
          value={faculty}
          onChange={(e) => dispatch(changeFaculty(e.target.value))}
          required
        >
          <option>Select faculty</option>
          {Faculties.map((f, idx) => (
            <option key={idx}>{f}</option>
          ))}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="department" className="text-muted">
          Dept.
        </Label>
        <Input
          type="select"
          name="department"
          id="department"
          value={department}
          onChange={(e) => dispatch(changeDepartment(e.target.value))}
          required
        >
          <option>Select department</option>
          {departmentList &&
            departmentList.map((dept, idx) => (
              <option key={idx}>{dept}</option>
            ))}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="course" className="text-muted">
          Course
        </Label>
        <Input
          type="select"
          name="course"
          id="course"
          value={course}
          onChange={(e) => dispatch(changeCourse(e.target.value))}
          required
        >
          <option>Select course</option>
          {coursesList &&
            coursesList.map((c, idx) => <option key={idx}>{c}</option>)}
        </Input>
      </FormGroup>
      <Button block className="mt-4">
        START
      </Button>
    </Form>
  );
}

//map Redux state to React component
const mapStateToProps = (state) => ({
  faculty: state.courseDetails.faculty,
  department: state.courseDetails.department,
  course: state.courseDetails.course,
});

//connect Redux to React
export default connect(mapStateToProps)(CourseForm);
