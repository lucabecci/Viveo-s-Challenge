import React, { Fragment } from "react";

const Creator = () => {
  return (
    <Fragment>
      <div className="jumbotron">
        <h1 className="display-4">Brian Luca Becci's profile</h1>
        <p className="lead">
          I'm a programmer based in Argentina and I'm 20 years old. I'm a
          fullstack proggrammer in typescript/javascript.
        </p>
        <hr className="my-4"></hr>
        <p>
          I really enojeyd doing this thecnical test and I hope to hear from you
          soon.
        </p>
        <a
          className="btn btn-primary btn-lg"
          target="blank"
          href="https://github.com/lucabecci"
          role="button"
        >
          Github
        </a>
      </div>
    </Fragment>
  );
};

export default Creator;
