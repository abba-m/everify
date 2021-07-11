import {
  ACC,
  AED,
  ARB,
  BCH,
  BIO,
  BUS,
  CHEM,
  COP,
  CSC,
  ECO,
  ENG,
  FRC,
  GEO,
  GLG,
  HIS,
  MCB,
  MCM,
  MTH,
  PHY,
  PUB,
  SED,
  SOC,
} from "./courses";
import { FEA, FLC, FMS, FNS } from "./departments";

export function doVibrate(time) {
  if (window.navigator.vibrate) {
    window.navigator.vibrate(time);
  }
}

export const Faculties = [
  "Education and Arts",
  "Languages and Communication",
  "Management and Social Sciences",
  "Natural Science",
];

export function generateDepartmentsList(faculty) {
  switch (faculty) {
    case "Education and Arts":
      return [...FEA];
    case "Languages and Communication":
      return [...FLC];
    case "Management and Social Sciences":
      return [...FMS];
    case "Natural Science":
      return [...FNS];
    default:
      return null;
  }
}

export function generateCoursesList(dpt) {
  switch (dpt) {
    case "Biochemistry":
      return [...BCH];
    case "Biology":
      return [...BIO];
    case "Chemistry":
      return [...CHEM];
    case "Computer Science":
      return [...CSC];
    case "Geography":
      return [...GEO];
    case "Geology":
      return [...GLG];
    case "Mathematics":
      return [...MTH];
    case "MicroBiology":
      return [...MCB];
    case "Physics":
      return [...PHY];
    case "Accounting":
      return [...ACC];
    case "Business Admin":
      return [...BUS];
    case "Economics":
      return [...ECO];
    case "Public Admin":
      return [...PUB];
    case "Sociology":
      return [...SOC];
    case "Adult Education":
      return [...AED];
    case "Counselling Psychology":
      return [...COP];
    case "History":
      return [...HIS];
    case "Science Education":
      return [...SED];
    case "Arabic":
      return [...ARB];
    case "English":
      return [...ENG];
    case "French":
      return [...FRC];
    case "Mass communication":
      return [...MCM];
    default:
      return null;
  }
}

export function verifyCandidate(cdtList, uniqueId) {
  //TODO: encrypt/decrypt uniqueId
  let candidate = cdtList.find((cdt) => cdt.Matric_num === uniqueId);

  return candidate;
}
