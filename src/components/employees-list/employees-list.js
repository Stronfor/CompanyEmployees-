import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList = ({ dataServ }) => {
  const elements = dataServ.map((item) => {
    return <EmployeesListItem {...item} />; // name={item.name} salary={item.salary}
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
