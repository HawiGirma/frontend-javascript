// main.ts

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create student objects
const student1: Student = {
  firstName: "Alice",
  lastName: "Smith",
  age: 22,
  location: "Paris",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Brown",
  age: 23,
  location: "London",
};

// Store in array
const studentsList: Student[] = [student1, student2];

// Create table and append to body
const table = document.createElement("table");
const headerRow = document.createElement("tr");
headerRow.innerHTML = "<th>First Name</th><th>Location</th>";
table.appendChild(headerRow);

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
