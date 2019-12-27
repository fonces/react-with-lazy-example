import React from "react";
import withLazy from "react-with-lazy";
import { Link } from 'react-router-dom'

const Employees = ({ useLazy }) => {
  const employees = useLazy(() =>
    fetch("https://dummy.restapiexample.com/api/v1/employees")
      .then(res => res.json())
  );

  return (
    <table>
      <thead>
        <tr>
          <td>id</td>
          <td>employee_name</td>
          <td>employee_salary</td>
          <td>employee_age</td>
          <td>profile_image</td>
        </tr>
      </thead>
      <tbody>
      {employees.map((employee, key) => (
        <tr key={key}>
          <td>
            <Link to={`/employee/${employee.id}`}>{employee.id}</Link>
          </td>
          <td>{employee.employee_name}</td>
          <td>{employee.employee_salary}</td>
          <td>{employee.employee_age}</td>
          <td>{employee.profile_image}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default withLazy(Employees);
