import { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  onUpdateSearchPanel = (e) => {
    //сoбытие чтоб вытащить то что ввел польз
    const term = e.target.value;
    this.setState({ term });
    // проброска НАВЕРХ
    this.props.onUpdateSearch(term);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control seach-input"
        placeholder="Trovare il dipendente"
        value={this.state.term}
        onChange={this.onUpdateSearchPanel}
      />
    );
  }
}

export default SearchPanel;
