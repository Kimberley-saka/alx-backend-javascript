/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      newGrades.map((studentGrade) => {
        if (studentGrade.studentId === student.id) {
          student.grade = studentGrade.grade;
        }

        if (!('grade' in student)) {
          student.grade = 'N/A';
        }
        return student;
      });

      return student;
    });
}
