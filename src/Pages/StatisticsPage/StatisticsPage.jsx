
import { useEffect, useState } from "react";
import { PieChart, Pie, Legend, Cell, } from "recharts";

const COLORS = ["#00C49F", "#FF444A"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,

}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill={percent > 0.5 ? "white" : "black"}
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const Statistics = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const getDataFromLocalStorage = () => {
            const selectedItem = JSON.parse(localStorage.getItem('donation'));
            if (selectedItem) {
                return selectedItem;
            }
            return [];
        };

        const dataFromLocalStorage = getDataFromLocalStorage();
        const totalItems = dataFromLocalStorage.length;

        const addedPercentage = (totalItems / 12) * 100;

        const remainingPercentage = 100 - addedPercentage;

        const chartData = [
            { name: "Your Donation", value: addedPercentage },
            { name: "Total Donation", value: remainingPercentage },
        ];

        setChartData(chartData);
    }, []);

    return (
        <div className="flex justify-center items-center con mx-auto">
            <PieChart width={400} height={400}>
                <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                </Pie>
                <Legend />

            </PieChart>
        </div>
    );
};

export default Statistics;