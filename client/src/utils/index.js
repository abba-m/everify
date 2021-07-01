import { v4 as uuidv4 } from "uuid";
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

export const registeredStudents = [
  {
    id: uuidv4(),
    name: "Amina Musa Kura",
    matric: "",
    password: 123456,
    level: "400",
  },
  {
    id: uuidv4(),
    name: "Muktar Alhaji",
    matric: "u16/fns/csc/1024",
    password: 123456,
    level: "400",
  },
  {
    id: uuidv4(),
    name: "Sadiq Usman",
    matric: "u16/fns/csc/1024",
    password: 123456,
    level: "400",
  },
  {
    id: uuidv4(),
    name: "Muhammad Gana",
    matric: "u16/fns/csc/1024",
    password: 123456,
    level: "400",
  },
  {
    id: uuidv4(),
    name: "Panshak Zamani",
    matric: "u16/fns/csc/1024",
    password: 123456,
    level: "400",
  },
  {
    id: uuidv4(),
    name: "Abigail Alex",
    matric: "u16/fns/csc/1024",
    password: 123456,
    level: "400",
  },
  {
    id: uuidv4(),
    name: "Audrey Bill",
    matric: "u16/fns/csc/1024",
    password: 123456,
    level: "400",
  },
  {
    id: uuidv4(),
    name: "Caroline Ayomide",
    matric: "u16/fns/csc/1024",
    password: 123456,
    level: "400",
  },
  {
    id: uuidv4(),
    name: "Bernadette Shehu",
    matric: "u16/fns/csc/1024",
    password: 123456,
    level: "400",
  },
  {
    id: uuidv4(),
    name: "Rebecca John",
    matric: "u16/fns/csc/1024",
    password: 123456,
    level: "400",
  },
  {
    id: uuidv4(),
    name: "Aisha Sani",
    matric: "u16/fns/csc/1024",
    password: 123456,
    level: "400",
  },
  {
    id: uuidv4(),
    name: "Rahma Abubakar",
    matric: "u16/fns/csc/1024",
    password: 123456,
    level: "400",
  },
];

export function verifyCandidate(uniqueId) {
  //TODO: encrypt/decrypt uniqueId
  let user = registeredStudents.find((cdt) => cdt.matric === uniqueId);

  return user;
}
