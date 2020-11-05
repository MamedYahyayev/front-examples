const id = new URLSearchParams(window.location.search).get("id");
const empDetails = document.querySelector(".emp_details");

const fetchEmployeeById = async () => {
  const response = await fetch(`http://localhost:3000/employees/${id}`);
  const employee = await response.json();

  const template = `
  <h1>Name: ${employee.name}</h1>
  <h1>Surname: ${employee.surname}</h1>
  <h1>Salary: ${employee.salary}</h1>
  `;

  empDetails.innerHTML = template;
};

window.addEventListener("DOMContentLoaded", () => fetchEmployeeById());
