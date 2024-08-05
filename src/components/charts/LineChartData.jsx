import { Line } from "react-chartjs-2";
import "chart.js/auto"; // Ensure you import this if you're using Chart.js v3+
import chartData from "../../utils/data/data.json";

const LineChartData = () => {
  return <Line data={chartData} />;
};

export default LineChartData;
