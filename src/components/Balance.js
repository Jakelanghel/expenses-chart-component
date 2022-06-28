import React from "react";
import { StyledBalance } from "./styled/Balance.Styled";
import images from "../constants/images";

const Balance = () => {
  return (
    <StyledBalance>
      <div className="container-balance">
        <p className="my-balance">My balance</p>
        <p className="balance">$921.48</p>
      </div>

      <div className="container-logo">
        <img src={images.logo} alt="logo" />
      </div>
    </StyledBalance>
  );
};

export default Balance;
