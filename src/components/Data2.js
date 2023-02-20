
import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";


const LineChart2 = () => {
  const labels = ["eric", "marc", "john", "sara", "meline", "teo"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Notes",
        backgroundColor: "lightblue",
        borderColor: "green",
        data: [ 10,13, 11, 16, 14, 8],
      },
    ],
  };
  
  return (
    <>
   
    
    
    </>
  );
};

export default LineChart2;

/*

import React, { useState } from "react";
import { Line } from "react-chartjs-2";


const LineChart2 = () => {
  const [data, setData] = useState({
    labels: ["eric", "marc", "john", "sara", "meline", "teo"],
    datasets: [
      {
        label: "Notes",
        backgroundColor: "lightblue",
        borderColor: "green",
        data: [10, 13, 11, 16, 14, 8],
      },
    ],
  });

  const handleUpdate = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const note = event.target.note.value;

    const newData = {
      labels: [...data.labels, name],
      datasets: [
        {
          label: "Notes",
          backgroundColor: "lightblue",
          borderColor: "green",
          data: [...data.datasets[0].data, note],
        },
      ],
    };

    setData(newData);
  };

  return (
    <div>
      <h1>Graphique de données:</h1>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name"  placeholder="name" />
        <br></br>
        <input type="text" name="note" placeholder="note" />
        <br></br>
        <button type="submit">update</button>
      </form>

      <div className="chart">
        <Line data={data} />
      </div>
    </div>
  );
};

export default LineChart2;
*/


 
