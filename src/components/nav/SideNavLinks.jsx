import {
  LayoutDashboard,
  ShoppingCart,
  ShoppingBag,
  ChartLine,
  Settings,
  LogOut,
} from "lucide-react";

import AdminDashboard from "../admin/AdminDashboard";
import Order from "../admin/Order";
import Products from "../admin/Products";
import SalesReport from "../admin/SalesReport";
import UserSettings from "../admin/UserSettings";
import Signout from "../admin/Signout";

export const SideNavLinks = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard />,
    component: "AdminDashboard",
  },
  {
    title: "Order",
    icon: <ShoppingCart />,
    component: "Order",
  },
  {
    title: "Products",
    icon: <ShoppingBag />,
    component: "Products",
  },
  {
    title: "Sales Report",
    icon: <ChartLine />,
    component: "SalesReport",
  },
  {
    title: "Settings",
    icon: <Settings />,
    component: "UserSettings",
  },
  {
    title: "Sign Out",
    icon: <LogOut />,
    component: "Signout",
  },
];
