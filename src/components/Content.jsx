import React from "react";
import AdminDashboard from "./admin/AdminDashboard";
import Order from "./admin/Order";
import Products from "./admin/Products";
import SalesReport from "./admin/SalesReport";
import UserSettings from "./admin/UserSettings";
import Signout from "./admin/Signout";
import "./Content.css";

const componentMap = {
  AdminDashboard,
  Order,
  Products,
  SalesReport,
  UserSettings,
  Signout,
};

const Content = ({ selectedComponentName }) => {
  const SelectedComponent =
    componentMap[selectedComponentName] || AdminDashboard;

  return (
    <section className="content-area">
      <SelectedComponent />
    </section>
  );
};

export default Content;
