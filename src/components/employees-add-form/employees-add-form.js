import { Component } from "react";

import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      salary: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Aggiungire uno nuovo Dipendente</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Come si chiama?"
            name="name"
            value={name} /* записывает актуальное значение для оптимизации */
            onChange={this.onValueChange}
          />

          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Stipendio in Euro?"
            name="salary"
            value={salary} /* записывает актуальное значение для оптимизации */
            onChange={this.onValueChange}
          />

          <button type="submit" className="btn btn-outline-light">
            Aggungire
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
