import React from "react";
import { createUseLazy } from "react-with-lazy";
import { withRouter } from 'react-router';

const { useLazy, purge } = createUseLazy()

const Employee = ({ match }) => {
  const id = match.params.id
  const employee = useLazy(() =>
    fetch(`http://dummy.restapiexample.com/api/v1/employee/${id}`).then(res =>
      res.json()
    ),
    [id]
  );

  return (
    <>
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
          <tr>
            <td>{employee.id}</td>
            <td>{employee.employee_name}</td>
            <td>{employee.employee_salary}</td>
            <td>{employee.employee_age}</td>
            <td>{employee.profile_image}</td>
          </tr>
        </tbody>
      </table>
      <input type={'button'} onClick={purge} name={'purge'} value={'purge'} />
    </>
  );
};

export default withRouter(
  Employee,
);
