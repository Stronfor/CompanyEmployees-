import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        // Эмитируем сервер для тренировки
        { name: "John C.", salary: 800, increase: false, like: true, id: 1 },
        { name: "Alex M.", salary: 3000, increase: false, like: false, id: 2 },
        { name: "Sergio K.", salary: 5000, increase: true, like: false, id: 3 },
      ],
      term: "", // string for searching
      filter: "tutti",
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        //в react мы не можен на прямую изменить исходные данные...
        //создаем его копию в таком виде в котором нам нужно

        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      like: false,
      id: this.maxId++,
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  // onToggleIncrease = (id) => {
  //   this.setState(({ data }) => ({
  //     data: data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, increase: !item.increase };
  //       }
  //       return item;
  //     }),
  //   }));
  // };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  // onToggleRise = (id) => {
  //   this.setState(({ data }) => ({
  //     data: data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, like: !item.like };
  //       }
  //       return item;
  //     }),
  //   }));
  // };

  searchEmp = (items, term) => {
    // items => arr to all employeers , term => the string entered by the user
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => item.name.indexOf(term) > -1);
  };

  // новый метод для того чтобы поднять состояние term из компонента search-panel
  onUpdateSearch = (term) => {
    this.setState({ term: term });
  };

  // ==> FILTER
  filterEmp = (emp, filterAtr) => {
    switch (filterAtr) {
      case "1000":
        return emp.filter((item) => item.salary > 1000);
      case "Aumento":
        return emp.filter((item) => item.like);
      default:
        return emp;
    }
  };
  // Up state
  onFilterSelect = (filterUser) => {
    this.setState({ filter: filterUser });
  };

  render() {
    const { data, term, filter } = this.state;
    // подсчет количества сотрудников
    const employees = data.length;
    // подсчет количества ПРЕМИЙ
    const rise = data.filter((item) => item.increase === true).length;
    // сохранянем отфильтровоные данны по поиску + по фильтрам
    const visibleData = this.filterEmp(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo numberEmp={employees} numberRise={rise} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>

        <EmployeesList
          dataServ={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />

        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
