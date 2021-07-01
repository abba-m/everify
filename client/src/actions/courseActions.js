export const CHANGE_FACULTY = "CHANGE_FACULTY";
export const CHANGE_DEPARTMENT = "CHANGE_DEPARTMENT";
export const CHANGE_COURSE = "CHANGE_COURSE";

export const changeFaculty = (selectedFaculty) => ({
  type: CHANGE_FACULTY,
  payload: selectedFaculty,
});

export const changeDepartment = (selectedDepartment) => ({
  type: CHANGE_DEPARTMENT,
  payload: selectedDepartment,
});

export const changeCourse = (selectedCourse) => ({
  type: CHANGE_COURSE,
  payload: selectedCourse,
});
