/*
TODO:
- change which days to display
- which subjects to display 
- mood selection

Do the same for pie chart^

 */

import React, {useState, useEffect} from 'react';
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
const howManyDaysMonth = {"January":31, "February":28, "March":31, "April":30, "May":31, "June":30, "July":31, "August":30, "September":30, "October":31, "November":30, "December":31};
const days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

const subjects = ["Photography", "Music", "Maths", "Computer Science", "Chemistry"];

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

/* Returns an object {subject: False} for all subjects*/
function getSubjectsDisplayedDefaultValue()
{
    const result: {[key:string]: boolean} = {};
    for (const s of subjects)
    {
        result[s] = false;
    }
    result[subjects[0]] = true; // Set first one as true
    return result;
}

function getStartingDataForLineGraph()
{
    return {labels:[], datasets: []};
}

export default function GraphPage() {
    const [monthBeingDisplayed, setMonthBeingDisplayed] = useState("January");
    const [subjectsDisplayed, setSubjectsDisplayed] = useState(getSubjectsDisplayedDefaultValue());

    const [chartType, setChartType] = useState<"line" | "pie">("line");
    const [lineChartData, setLineChartData] = useState<ChartData<'line'>>(
        getStartingDataForLineGraph()
    );

    //function updateGraphData(): ChartData<'line'> {
    function updateGraphData(): void {
            
        const borderColor: string = 'rgb(255, 99, 132)';
        const backgroundColor: string = 'rgba(255, 99, 132, 0.5)';

        const borderColors: { [key: string]: string; } = {
            "Maths": "rgba(255, 99, 132)",
            "Photography": "rgba(26, 250, 132)",
            "Music": "rgba(150, 0, 230)",
            "Computer Science": "rgba(150, 99, 132)",
            "Chemistry": "rgba(50, 255, 50)",
        };

        const backgroundColors: { [key: string]: string; }= {
            "Maths": "rgba(255, 99, 132, 0.5)",
            "Photography": "rgba(26, 250, 132, 0.5)",
            "Music": "rgba(150, 0, 230, 0.5)",
            "Computer Science": "rgba(150, 99, 132, 0.5)",
            "Chemistry": "rgba(50, 255, 50, 0.5)",
        };

        // Get dataset for every subject that is turned on
        let _datasets: any = [];
        for (const subject of subjects) {
            if (subjectsDisplayed[subject]) {
                _datasets.push({
                    tension: 0.2,
                    label: subject,
                    data: fakedata[subject as keyof typeof fakedata][monthBeingDisplayed as keyof typeof fakedata["Maths"]],
                    borderColor: borderColors[subject],
                    backgroundColor: backgroundColors[subject],
                });
            }
        }

        setLineChartData({
            labels: days.slice(0, howManyDaysMonth[monthBeingDisplayed as keyof typeof howManyDaysMonth]),
            datasets: _datasets,
        })
    }

    useEffect(() => {
        updateGraphData(); // This is be executed when the state changes
    }, [monthBeingDisplayed]);

    useEffect(() => {
        updateGraphData(); // This is be executed when the state changes
    }, [subjectsDisplayed]);

    return (
        <div style={{minHeight: "100vh"}}>

            <div className={"GraphContainer2"}>
                <button className={"GraphPageBtn"}
                        onClick={() => {setChartType("line")}}
                        disabled={chartType === "line"}
                >
                    Line Chart
                </button>
                <div className={"verticalBarDiv"}></div>
                <button className={"GraphPageBtn"}
                        onClick={() => {setChartType("pie")}}
                        disabled={chartType === "pie"}
                >
                    Pie Chart
                </button>
            </div>

            <div className={"GraphContainer"}>
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
                    <select onChange={(e: any) => setMonthBeingDisplayed(e.target.value)}>
                        {
                            monthLabels.map((element, index) => (
                                <option value={element} key={index}>{element}</option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    {
                        subjects.map((element, index) => {
                            return (
                                <div key={index} className={"checkboxText"}>
                                    <input type="checkbox" checked={subjectsDisplayed[element]}
                                        onChange={(e) => {
                                            setSubjectsDisplayed({
                                                ...subjectsDisplayed,
                                                [element]: e.target.checked,
                                            });
                                        }}/>
                                    <p>{element}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    );
}

