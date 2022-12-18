import { Component } from "react";

import "./app-filter.css";

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnAttribute: "tutti",
    };
  }

  filter = (e) => {
    const btnAttributeCurrent = e.currentTarget.getAttribute("data-atr");
    this.setState({ btnAttribute: btnAttributeCurrent });

    // UP
    this.props.getUpFilter(btnAttributeCurrent);
  };

  render() {
    return (
      <div className="btn-group">
        <button
          className="btn btn-light"
          type="button"
          data-atr="tutti"
          onClick={this.filter}
        >
          Tutti dipendenti
        </button>
        <button
          className="btn btn-outline-light"
          type="button"
          data-atr="Aumento"
          onClick={this.filter}
        >
          Aumento
        </button>
        <button
          className="btn btn-outline-light"
          type="button"
          data-atr="1000"
          onClick={this.filter}
        >
          Stipendio piu di 1000$
        </button>
      </div>
    );
  }
}

export default AppFilter;
