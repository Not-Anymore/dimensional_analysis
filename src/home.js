import React from "react";
import Select from "react-select";

const aquaticCreatures = [
  { label: "Shark", value: "Shark" },
  { label: "Dolphin", value: "Dolphin" },
  { label: "Whale", value: "Whale" },
  { label: "Octopus", value: "Octopus" },
  { label: "Crab", value: "Crab" },
  { label: "Lobster", value: "Lobster" },
];

const Home = () => {
  return (
    <div>
      <div className="header">
        <h2>Dimensional analysis Calculator</h2>
      </div>

      <div className="row">
        <Select options={aquaticCreatures} />
      </div>

      <div className="footer">
        <p>This will be footer</p>
      </div>
    </div>
  );
};

export default Home;
