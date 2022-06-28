import React from "react";
import { StyledGraphContainer } from "../components/styled/GraphContainer.Styled";
import Graph from "../components/Graph";

const GraphContainer = (props) => {
  return (
    <StyledGraphContainer>
      <h1 className="title">Spending - Last 7 days</h1>

      <div className="container-graph">
        <Graph data={props.data} />
      </div>
      <div className="container-total">
        <div className="container-current-month">
          <p>Total this month</p>
          <p className="total">$478.33</p>
        </div>
        <div className="container-last-month">
          <p className="percent">+2.4%</p>
          <p>from last month </p>
        </div>
      </div>
    </StyledGraphContainer>
  );
};

export default GraphContainer;
