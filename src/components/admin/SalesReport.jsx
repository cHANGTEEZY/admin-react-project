import LineChartData from "../charts/LineChartData";
import BarChartData from "../charts/BarChartData";
import PieChartData from "../charts/PieChartData";
import "./SalesReport.css";

const SalesReport = () => {
  return (
    <div className="sales-report-container">
      <div className="sales-report-grid">
        <div className="sales-grid-item sales-grid-item-first">
          <LineChartData />
        </div>

        <div className="sales-grid-item sales-grid-item-second">
          <BarChartData />
        </div>
        <div className="sales-grid-item sales-grid-item-third">
          <PieChartData />
        </div>
      </div>
    </div>
  );
};

export default SalesReport;
