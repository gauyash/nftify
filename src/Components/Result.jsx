import React from "react";
import Card from "./Card";

const Result = ({ data, isToken }) => {
  return (
    <div className="my-4">
      <h2 className="heading clr_white">
        {isToken ? "Token Search Results" : "Pair Search Results"}
      </h2>
      <Card data={data} />
    </div>
  );
};

export default Result;
