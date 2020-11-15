import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
const History = ({ refresh, setRefresh }) => {
  const [operations, setOperations] = useState([]);

  useEffect(() => {
    getOperations();
  }, [refresh]);

  const getOperations = async () => {
    const resp = await axios.get("http://localhost:4000/operation");
    await setOperations(resp.data.operations);
  };
  const deleteOperation = async (id) => {
    await axios.delete(`http:///localhost:4000/operation/${id}`);
    setRefresh(Math.random(0, 1));
  };
  return (
    <Fragment>
      <div className="col m-2">
        <div className="container m-2">
          <h2 className="text-center">History</h2>
        </div>
        <div className="container">
          {operations.map((op) => (
            <li className="list-group-item list-group-item-action" key={op._id}>
              <strong>{op.operation}</strong> = <strong>{op.result}</strong>
              <button
                type="button"
                className="close"
                onClick={() => deleteOperation(op._id)}
              >
                &times;
              </button>
            </li>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default History;
