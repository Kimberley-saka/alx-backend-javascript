/* eslint-disable linebreak-style */
export default function getStudentsByLocation(studentList, city) {
  const newList = studentList.filter((student) => student.location === city);
  return newList;
}
