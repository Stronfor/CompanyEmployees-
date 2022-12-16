import "./app-info.css";

const AppInfo = (props) => {
  return (
    <div className="app-info">
      <h1>Contabilità per i dipendenti in azienda N</h1>
      <h2>Numero totale di dipendenti: {props.numberEmp} </h2>
      <h2>Il premio sarà ricevuto: {props.numberRise} </h2>
    </div>
  );
};

export default AppInfo;
