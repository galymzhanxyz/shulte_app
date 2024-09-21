import React from "react";
import "./CellContent.css";

class CellContent extends React.Component {
  render() {
    return <div className="text-content">{this.props.text}</div>;
  }
}

export default CellContent;
