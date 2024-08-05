import LineChartData from "../charts/LineChartData";
import BarChartData from "../charts/BarChartData";
import PieChartData from "../charts/PieChartData";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <section className="admin-chart-area">
      <div className="admin-dashboard-container">
        <div className="div1 grid-item">
          <LineChartData />
        </div>
        <div className="div2 grid-item">
          <BarChartData />
        </div>
        <div className="div3 grid-item">
          <PieChartData />
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
