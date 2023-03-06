import React from 'react';
import loading from "./line.gif";

const Spinner = () => {
  return (
    <img
      src={loading}
      className="text-center"
      width="10px"
      height="10px"
      alt="loading"
    />
  );
};

export default Spinner;
