/* eslint-disable linebreak-style */
export default function getStudentIdsSum(studentList) {
  const idSum = studentList.reduce((accumulator, student) => accumulator + student.id, 0);
  return idSum;
}
