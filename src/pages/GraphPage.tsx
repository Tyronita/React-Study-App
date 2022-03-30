/*
TODO:
- change which days to display
- which subjects to display 
- mood selection

 */

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
    ChartData,
} from 'chart.js';
import { Line, Pie } from 'react-chartjs-2';

import "../styles/GraphPage.css";
import fakedata from "../fakedata/fake_data.js";

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

/* NOTE(gonk): This data stuff is just test code */

const monthLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekDaysLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const days = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

function makeLineGraphData(
        month: string,
        borderColor: string = 'rgb(255, 99, 132)',
        backgroundColor: string = 'rgba(255, 99, 132, 0.5)'
    ): ChartData<'line'> {

    //let hoursStudied = labels.map(() => (Math.random()*100)%8);

    return {
        labels: days,
        datasets: [
            {
                tension: 0.1,
                label: 'Total time',
                data: fakedata[month as keyof typeof fakedata],
                borderColor: borderColor,
                backgroundColor: backgroundColor,
            },
        ],
    }
}

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
    const [lineChartData, setLineChartData] = useState<ChartData<'line'>>(
        makeLineGraphData("January")
    );

    return (
        <div style={{minHeight: "100vh"}}>

            <div className={"container2"}>
                <button className={"btn"}
                        onClick={() => {setChartType("line")}}
                        disabled={chartType === "line"}
                >
                    Line Chart
                </button>
                <div className={"verticalBarDiv"}></div>
                <button className={"btn"}
                        onClick={() => {setChartType("pie")}}
                        disabled={chartType === "pie"}
                >
                    Pie Chart
                </button>
            </div>

            <div className={"container"}>
                <div style={{height: "50%", width: "50%"}}>
                    { chartType === "line" && (
                        <>
                            <h2>Line chart</h2>
                            <Line options={options} data={lineChartData} />
                        </>
                    )}
                    { chartType === "pie" && (
                        <>
                            <h2>Pie Chart</h2>
                            <Pie data={pieData} />
                        </>
                    )}
                </div>
                <div>
                    <select onChange={
                        e=>{
                            setLineChartData(makeLineGraphData(e.target.value));
                            console.log(e.target.value);
                        }
                        }>
                        {
                            monthLabels.map((element, index) => (
                                <option value={element} key={index}>{element}</option>    
                            ))
                        }
                    </select>

                </div>
            </div>

        </div>
    );
}

