const employeeBox = document.querySelector(".employees__box");
const empBox = document.querySelector('.employee__box');
const fetchEmployees = async () => {

  const response = await fetch("http://localhost:3000/employees");
  const employees = await response.json();

  console.log(employees)

  let template = "";

  employees.forEach((employee) => {
    template += `
         <div class="employee__box">
            <p>Name: ${employee.name}</p>
            <p>Surname: ${employee.surname}</p>
            <p>Salary: ${employee.salary}</p>
            <a href="employee_details.html?id=${employee.id}">Click more...</a>
         </div>
         `;
  });

  employeeBox.innerHTML = template;
};

const getEmployeeById = () => {

}

window.addEventListener("DOMContentLoaded", () => fetchEmployees());
