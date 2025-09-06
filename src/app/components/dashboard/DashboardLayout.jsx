"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import AllCart from "./user/AllCart";
import OrderedItems from "./user/OrderedItems";
import PendingDelivery from "./user/PendingDelivery";
import AddProduct from "./seller/AddProduct";
import AllProducts from "./seller/AllProducts";
import TotalSell from "./seller/TotalSell";
import SellerProfile from "./seller/SellerProfile";
import UserProfile from "./user/UserProfile";

export default function DashboardLayout() {
  const [activeRoute, setActiveRoute] = useState("profile");
  const [role] = useState("seller");

  const renderContent = () => {
    if (role === "user") {
      switch (activeRoute) {
        case "profile":
          return <UserProfile />;
        case "all-cart":
          return <AllCart />;
        case "ordered-item":
          return <OrderedItems />;
        case "pending-delivery":
          return <PendingDelivery />;
        default:
          return <UserProfile />;
      }
    } else {
      switch (activeRoute) {
        case "profile":
          return <SellerProfile />;
        case "add-product":
          return <AddProduct />;
        case "all-product":
          return <AllProducts />;
        case "total-sell":
          return <TotalSell />;
        default:
          return <SellerProfile />;
      }
    }
  };

  return (
    <div className=" min-h-screen bg-gray-300">
      <div className="container mx-auto px-4 flex p-8">
        <Sidebar
          role={role}
          activeRoute={activeRoute}
          setActiveRoute={setActiveRoute}
        />
        <div className="flex flex-col flex-1 pl-8">
          <main className="p-6 bg-white rounded-2xl text-black">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
}
