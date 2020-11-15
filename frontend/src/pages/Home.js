import React, { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <div className="jumbotron">
        <h1 className="display-5">Welcome to Viveo calculator!</h1>
        <p className="lead">
          This calculator can solve adds and substractions but, depending on the
          operation, it will add or substract 5 from the final result. Each
          operation you make will be saved and can be deleted from the history.{" "}
        </p>
        <hr className="my-4"></hr>
        <p>This system was designed for the Viveo's developer challenge.</p>
      </div>
    </Fragment>
  );
};

export default Home;
