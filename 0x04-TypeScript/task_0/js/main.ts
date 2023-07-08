interface Student {
  firstName: string
  lastName: string
  age: number
  location: string
}

const StudentOne: Student = {
    firstName: "Loyd",
    lastName: "Ngei",
    age: 21,
    location: "Nairobi"  
}

const StudentTwo: Student = {
    firstName: "Dawson",
    lastName: "Wright",
    age: 23,
    location: "Kisumu"
}

const studentList = [StudentOne, StudentTwo]

const table = document.getElementById('studentTable') as HTMLTableElement;

// Create a new row for each student and append it to the table
studentList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})