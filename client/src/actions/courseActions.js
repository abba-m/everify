export const CHANGE_FACULTY = "CHANGE_FACULTY";
export const CHANGE_DEPARTMENT = "CHANGE_DEPARTMENT";
export const CHANGE_COURSE = "CHANGE_COURSE";
export const FETCH_CANDIDATES = "FETCH_CANDIDATES";

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

export const fetchCandidates = (candidates) => ({
  type: FETCH_CANDIDATES,
  payload: candidates,
});
