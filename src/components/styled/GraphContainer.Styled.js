import styled from "styled-components";

export const StyledGraphContainer = styled.main`
  padding: 1.5rem 2rem;
  margin-top: 1.5rem;
  border-radius: 15px;
  background: var(--white);
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;

  h1 {
    font-size: 1.35rem;
  }

  .container-graph {
    padding-bottom: 1rem;
  }

  .container-total {
    display: flex;
    justify-content: space-between;
    border-top: solid 2px var(--cream);
    padding-top: 1rem;

    p {
      color: var(--med-brown);
    }

    .total {
      font-size: 2rem;
      font-weight: 700;
      color: var(--dark-brown);
    }

    .container-last-month {
      text-align: right;
      align-self: flex-end;

      .percent {
        font-weight: 700;
        color: var(--dark-brown);
      }
    }
  }
`;
