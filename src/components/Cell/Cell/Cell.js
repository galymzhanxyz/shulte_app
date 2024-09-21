import React, { Component } from "react";
import CellContent from "../CellContent/CellContent";
import "./Cell.css";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../../slices/targetNumSlice";
import {
  setErrorMessage,
  clearErrorMessage,
} from "../../../slices/errorMessageSlice";

const Cell = (props) => {
  const dispatch = useDispatch();
  const { backgroundColor, text } = props;

  const targetNum = useSelector((state) => state.targetNum.value);

  const shulteClick = () => {
    if (targetNum === +text) {
      dispatch(clearErrorMessage());
      dispatch(increment());
    } else {
      dispatch(setErrorMessage(`Вы нажали на ${text}!`));
    }
  };

  return (
    <div className="cell" style={{ backgroundColor }} onClick={shulteClick}>
      <CellContent text={text} />
    </div>
  );
};

export default Cell;
