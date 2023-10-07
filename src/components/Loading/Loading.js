import React from "react";
import { css } from "@emotion/react";
import { RingLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const RoundSpinner = ({ loading }) => {
  return (
    <div className="sweet-loading">
      <RingLoader css={override} size={60} color={"#123abc"} loading={loading} />
    </div>
  );
};

export default RoundSpinner;
