import React from "react";
import styled from "styled-components";
// import {Chart, ArcElement} from 'chart.js'
import 'chart.js/auto';
import { Pie } from "react-chartjs-2";
const PieChart = () => {
    // Chart.register(ArcElement);
const pieChartData = {
labels: ["October", "November", "December"],
datasets: [{
data: [8137119, 9431691, 10266674],
label: "Infected People",
backgroundColor: ["#2FDE00", "#00A6B4", "#ff6600"],
hoverBackgroundColor: ["#175000", "#003350", "#993d00"]
}]
};
    const pieChart = (
    <Wrap>
        <Pie
        type="pie"
        width={130}
        height={50}
        options={{
        title: {
        display: true,
        text: "COVID-19 Cases of Last 3 Months",
        fontSize: 15
        },
        legend: {
        display: true, //Is the legend shown?
        position: "top" //Position of the legend.
        }
        }}
        data={pieChartData}
                    />
    </Wrap>
        );
        return pieChart;
        };

const Wrap = styled.div`
    width: 60%;
    height: 500px
`
export default PieChart;