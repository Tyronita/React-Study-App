import React, {useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
import { Line, Pie } from 'react-chartjs-2';

import "../styles/GraphPage.css";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Time Spent Studying',
        },
    },
};

const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const data = {
    labels,
    datasets: [
        {
            tension: 0.3,
            label: 'Maths',
            data: labels.map(() => (Math.random()*100)%10),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Computer Science',
            data: labels.map(() => (Math.random()*100)%10),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export const pieData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function GraphPage() {
    const [chartType, setChartType] = useState<"line" | "pie">("line")

    return (
        <div>
            <div>
                <button className={"btn"}
                        onClick={() => {setChartType("line")}}
                        disabled={chartType === "line"}
                >
                    Show Line Chart
                </button>
                <button className={"brn"}
                        onClick={() => {setChartType("pie")}}
                        disabled={chartType === "pie"}
                >
                    Show Pie Chart
                </button>
            </div>

            <br/>

            <div className={"container"}>
                <div style={{height: "50%", width: "50%"}}>
                    { chartType === "line" && (
                        <>
                            <h2>Line chart</h2>
                            <Line options={options} data={data} />
                        </>
                    )}
                    { chartType === "pie" && (
                        <>
                            <h2>Pie Chart</h2>
                            <Pie data={pieData} />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

