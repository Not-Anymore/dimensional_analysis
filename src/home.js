import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";

// const quantities = [
//   { label: "Density", value: "Density" },
//   { label: "Volume", value: "Volume" },
//   { label: "Force", value: "Force" },
//   { label: "Work", value: "Work" },
//   { label: "Energy", value: "Energy" },
//   { label: "Efficiency", value: "Efficiency" },
// ];

const Home = () => {
  const [quantity, setQuantity] = useState([]);
  const [analysis, SetAnalysis] = useState({});
  const newAnalysis = (analysis) => {
    SetAnalysis(analysis);
  };
  const getQuantities = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    response.data.forEach((element) => {
      element.label = element.id;
    });
    setQuantity(response.data);
  };
  useEffect(() => {
    getQuantities(quantity);
  }, []);
  return (
    <div className="container">
      <div className="header">
        <h2>Dimensional Analysis Calculator</h2>
      </div>

      <div className="row">
        <Select
          options={quantity}
          onChange={(opt) => newAnalysis(opt)}
          className="select"
        />
      </div>
      <div className="solution">
        <p>{analysis.body || "---For Your analysis---"} </p>
      </div>
    </div>
  );
};

export default Home;
