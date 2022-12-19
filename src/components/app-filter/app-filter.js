import "./app-filter.css";

const AppFilter = (props) => {
  //формируем кнопки через массив
  const buttonsData = [
    { name: "tutti", label: "Tutti dipendenti" },
    { name: "Aumento", label: "Aumento" },
    { name: "1000", label: "Stipendio piu di 1000$" },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    //назначение активного класса
    const active = props.filter === name; //if(props.filter === name)(true/false)
    const clazz = active ? "btn-light" : "btn-outline-light";
    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });

  // отрисовка кнопок
  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
