
import React, { useState } from "react";
import { Bar, Line,Pie } from "react-chartjs-2";


function BarChart() {
  const labels = ["eric", "marc", "john", "sara", "meline", "teo"];
  const [chartData, setChartData] = useState({
    labels: labels,
    datasets: [
      {
        label: "Notes",
        backgroundColor:["lightblue","lightgreen","red","orange","yellow","purple"],
        borderColor: ["lightblue","lightgreen","red","orange","yellow","purple"],
        data: [10, 13, 11, 16, 14, 8],
      },
    ],
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const note = event.target.elements.note.value;
    const data = chartData.datasets[0].data.slice();
    const index = labels.indexOf(name);
    if (index !== -1) {
      data[index] = note;
      setChartData({
        labels: labels,
        datasets: [
          {
            label: "Notes",
            backgroundColor:["lightblue","lightgreen","red","orange","yellow","purple"] ,
            borderColor: ["lightblue","lightgreen","red","orange","yellow","purple"],
            data: data,
          },
        ],
      });
      
    }
  };

  return (
    <>
      <div className="chart">
        <h1>Graphique de données:</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="name" />
          <input type="text" name="note" placeholder="note" />
          <button type="submit">update</button>
        </form>

        <div>
          <h3>Bar chart:</h3>
          <Bar data={chartData} />
          <h3>Line chart:</h3>
          <Line data={chartData} />
          <h3>Pie chart:</h3>
          <Pie data={chartData} />
        </div>
      </div>
    </>
  );
}

export default BarChart;


 
