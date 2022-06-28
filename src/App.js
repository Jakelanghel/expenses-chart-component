import React, { useEffect, useState } from "react";
import GlobalStyles from "./components/styled/Global";
import { StyledContainer } from "./components/styled/Container.Styled";
import Balance from "./components/Balance";
import GraphContainer from "./components/GraphContainer";
import data from "./data.json";
import { Bubble } from "react-chartjs-2";

function App() {
  const allAmounts = data.map((i) => i.amount);
  const max = Math.max(...allAmounts);
  const colors = allAmounts.map((amount) =>
    amount === max ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)"
  );

  let total = 0;
  for (let i = 0; i < allAmounts.length; i++) {
    total += allAmounts[i];
  }

  console.log(total);

  const [usrData, setUrsData] = useState({
    labels: data.map((data) => data.day),
    datasets: [
      {
        label: "",
        borderRadius: 3,
        backgroundColor: colors,
        data: data.map((data) => data.amount),
      },
    ],
  });

  return (
    <div>
      <GlobalStyles />
      <StyledContainer>
        <Balance />
        <GraphContainer data={usrData} />
      </StyledContainer>
    </div>
  );
}

export default App;
