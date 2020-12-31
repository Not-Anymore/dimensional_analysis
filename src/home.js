import React from "react";
import Select from "react-select";

const quantities = [
  { label: "Density", value: "Density" },
  { label: "Volume", value: "Volume" },
  { label: "Force", value: "Force" },
  { label: "Work", value: "Work" },
  { label: "Energy", value: "Energy" },
  { label: "Efficiency", value: "Efficiency" },
];

const Home = () => {
  return (
    <div>
      <div className="header">
        <h2>Dimensional Analysis Calculator</h2>
      </div>

      <div className="row">
        <Select options={quantities} className="select" />
      </div>
      <div className="solution">
        <p>---For Your analysis---</p>
      </div>
    </div>
  );
};

export default Home;
