import React from "react";

const ErrorMsg = ({ msg }) => {
  return (
    <div>
      <div className="alert alert-dismissible alert-danger">
        <button type="button" className="close" data-dismiss="alert">
          &times;
        </button>
        <p>{msg}</p>
      </div>
    </div>
  );
};

export default ErrorMsg;
