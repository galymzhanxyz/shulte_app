import React, { Component } from "react";
import Cell from "../Cell/Cell";
import "./CellRow.css";

class CellRow extends Component {
  render() {
    const { row_values } = this.props;
    return (
      <div className="cell-row">
        {row_values.map((row, i) => {
          return <Cell key={i} text={row.key} backgroundColor={row.color} />;
        })}
      </div>
    );
  }
}

export default CellRow;
