import React, { Component } from "react";
import PieChartGame from "../piechart";

const data = [
  { key: "Friends and colleagues", value: 14, color: "#F6D3FD" },
  { key: "Mentors", value: 9, color: "#E9FFD1" },
  { key: "Teachers", value: 5, color: "#FFE4B9" },
  { key: "Writing groups", value: 2, color: "#FAF097" },
  { key: "Editors", value: 2, color: "#F2FFF0" }
];

export default class Game1 extends Component {
  render() {
    return <PieChartGame data={data} />;
  }
}
