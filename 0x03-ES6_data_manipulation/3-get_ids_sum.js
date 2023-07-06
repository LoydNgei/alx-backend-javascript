function getStudentIdsSum(students) {
  return students.reduce((total, student) => total + student.id, 0);
}
export default getStudentIdsSum;

// Reduce Iterates over the Array and returns the final sum of all the student ids
