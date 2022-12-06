import "./app-filter.css";

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-light" type="button">
        Tutti dipendenti
      </button>
      <button className="btn btn-outline-light" type="button">
        Aumento
      </button>
      <button className="btn btn-outline-light" type="button">
        Stipendio piu di 1000$
      </button>
    </div>
  );
};

export default AppFilter;
