/* eslint-disable no-eval */
import React, { Fragment, useState } from "react";
import axios from "axios";

import "./Calculator.css";
import ErrorMsg from "./ErrorMsg";
const Calculator = ({ setRefresh }) => {
  const [operation, setOperation] = useState("");
  const [display, setDisplay] = useState("");
  const [errorOperation, setErrorOperation] = useState(false);
  const [symbolsErr, setSymbolsErr] = useState(false);

  const addToOperation = (e) => {
    e.preventDefault();
    setOperation(operation.concat(e.target.value));
    setDisplay(operation.concat(e.target.value));
  };

  const createResult = async (e) => {
    e.preventDefault();
    setSymbolsErr(false);
    if (operation.length === 0) {
      setErrorOperation(true);
      return;
    }
    setErrorOperation(false);
    const addSymbol = /\+/g;
    const subtractSymbol = /-/g;
    const resultAdd = operation.match(addSymbol);
    const resultSubtract = operation.match(subtractSymbol);
    if (resultAdd && resultSubtract == null) {
      let result = 0;
      try {
        result = eval(operation);
      } catch (e) {
        setSymbolsErr(true);
        return;
      }
      const finalResult = result + 5;
      setDisplay(finalResult);
      setOperation("");
      setOperation(finalResult + "");
      await saveOperation(operation, finalResult);
      setRefresh(Math.random(0, 1));
    } else if (resultSubtract && resultAdd == null) {
      let result = 0;
      try {
        result = eval(operation);
      } catch (e) {
        setSymbolsErr(true);
        return;
      }
      const finalResult = result - 5;
      setDisplay(finalResult);
      setOperation(finalResult + "");
      await saveOperation(operation, finalResult);
      setRefresh(Math.random(0, 1));
    } else {
      let result = 0;
      try {
        result = eval(operation);
      } catch (e) {
        setSymbolsErr(true);
        return;
      }
      const finalResult = result;
      setDisplay(finalResult);
      setOperation("");
      setOperation(finalResult + "");
      await saveOperation(operation, finalResult);
      setRefresh(Math.random(0, 1));
    }
  };
  const clearOperation = (e) => {
    e.preventDefault();
    setOperation(e.target.value);
    setDisplay(e.target.value);
  };

  const saveOperation = async (operation, result) => {
    const resp = await axios({
      method: "POST",
      url: "http://localhost:4000/operation",
      data: {
        operation: operation,
        result: result,
      },
    });
    return resp;
  };
  return (
    <Fragment>
      <div className="col md-2">
        {symbolsErr ? <ErrorMsg msg="SINTAX ERROR" /> : null}
        {errorOperation ? <ErrorMsg msg="INSERT OPERATION" /> : null}
        <div className="container m-2">
          <h2 className="text-center"> Calculator </h2>
          <form className="calculator" name="calc">
            <input
              className="value"
              type="text"
              placeholder={display}
              readOnly
            />
            <button
              className="num btn btn-sm btn-danger m-1"
              value={""}
              onClick={clearOperation}
            >
              c
            </button>
            <button
              className="num btn btn-sm btn-primary m-1"
              value={"7"}
              onClick={addToOperation}
            >
              7
            </button>
            <button
              className="num btn btn-sm btn-primary m-1"
              value={"8"}
              onClick={addToOperation}
            >
              8
            </button>
            <button
              className="num btn btn-sm btn-primary m-1"
              value={"9"}
              onClick={addToOperation}
            >
              9
            </button>
            <button
              className="num btn btn-sm btn-info m-1"
              value={"-"}
              onClick={addToOperation}
            >
              -
            </button>
            <button
              className="num btn btn-sm btn-primary m-1"
              value={"4"}
              onClick={addToOperation}
            >
              4
            </button>
            <button
              className="num btn btn-sm btn-primary m-1"
              value={"5"}
              onClick={addToOperation}
            >
              5
            </button>
            <button
              className="num btn btn-sm btn-primary m-1"
              value={"6"}
              onClick={addToOperation}
            >
              6
            </button>
            <button
              className="num btn btn-sm btn-info m-1"
              value={"+"}
              onClick={addToOperation}
            >
              +
            </button>
            <button
              className="num btn btn-sm btn-primary m-1"
              value={"1"}
              onClick={addToOperation}
            >
              1
            </button>
            <button
              className="num btn btn-sm btn-primary m-1"
              value={"2"}
              onClick={addToOperation}
            >
              2
            </button>
            <button
              className="num btn btn-sm btn-primary m-1"
              value={"3"}
              onClick={addToOperation}
            >
              3
            </button>
            <button
              className="num btn btn-sm btn-primary m-1"
              value={"0"}
              onClick={addToOperation}
            >
              0
            </button>
            <button
              className="num btn btn-sm btn-primary m-1"
              value={"00"}
              onClick={addToOperation}
            >
              00
            </button>
            <button
              className="num btn btn-sm btn-primary m-1"
              value={"."}
              onClick={addToOperation}
            >
              .
            </button>
            <button
              className="num btn btn-sm btn-success m-1"
              onClick={createResult}
            >
              =
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Calculator;
