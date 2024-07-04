interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Uko',
  lastName: 'Uwatt',
  age: 29,
  location: 'Lagos',
};

const student2: Student = {
  firstName: 'Daniel',
  lastName: 'Mabia',
  age: 30,
  location: 'Benin',
};

const studentsList: Student[] = [student1, student2];
const table = document.createElement('table');
const tableBody = document.createElement('tbody');
studentsList.forEach(student => {
  let tableRow = document.createElement('tr');
  let cell1 = document.createElement('td');
  let cell2 = document.createElement('td');
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
  tableRow.appendChild(cell1);
  tableRow.appendChild(cell2);
  tableBody.appendChild(tableRow);
});

table.appendChild(tableBody);
document.body.appendChild(table);
