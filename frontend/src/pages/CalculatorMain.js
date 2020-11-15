import React, { Fragment, useState } from "react";

import Calculator from "../components/Calculator";
import History from "../components/History";

const CalculatorMain = () => {
  const [refresh, setRefresh] = useState(0);
  return (
    <Fragment>
      <div className="container-lg">
        <div className="row">
          <Calculator setRefresh={setRefresh} />
          <History refresh={refresh} setRefresh={setRefresh} />
        </div>
      </div>
    </Fragment>
  );
};

export default CalculatorMain;
