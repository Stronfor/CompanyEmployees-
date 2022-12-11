import "./employees-add-form.css";

const EmployeesAddForm = () => {
  return (
    <div className="app-add-form">
      <h3>Aggiungire uno nuovo Dipendente</h3>
      <form className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Come si chiama?"
        />

        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Stipendio in Euro?"
        />

        <button type="submit" className="btn btn-outline-light">
          Aggungire
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
