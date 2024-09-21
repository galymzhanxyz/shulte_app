import React, { Component } from "react";
import CellRow from "../Cell/CellRow/CellRow";
import "./ShulteTable.css";
import { generateColorArray, shuffle } from "../../utils/helper";

class ShulteTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
    };
  }
  componentDidMount() {
    const colors = generateColorArray(25);
    let numbers = [];
    for (let i = 1; i <= 5; i++) {
      for (let j = 1; j <= 5; j++) {
        numbers.push((i - 1) * 5 + j);
      }
    }
    shuffle(numbers);

    const rows = [];

    for (let i = 1; i <= 5; i++) {
      let row = [];
      for (let j = 1; j <= 5; j++) {
        row.push({
          key: numbers[(i - 1) * 5 + j - 1],
          color: colors[(i - 1) * 5 + j - 1],
        });
      }

      rows.push(row);
    }

    this.setState({ rows });
  }

  render() {
    return (
      <div className="shulte">
        {this.state.rows.map((row, i) => {
          return <CellRow key={i} row_values={row} />;
        })}
      </div>
    );
  }
}

export default ShulteTable;
