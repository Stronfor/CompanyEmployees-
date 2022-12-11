import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

function App() {
  // Эмитируем сервер для тренировки
  const data = [
    { name: "John C.", salary: 800, increase: false },
    { name: "Alex M.", salary: 3000, increase: false },
    { name: "Sergio K.", salary: 5000, increase: true },
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList dataServ={data} />

      <EmployeesAddForm />
    </div>
  );
}

export default App;
