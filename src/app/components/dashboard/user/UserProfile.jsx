"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Heart, ShoppingCart, CheckCircle, MapPin } from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const purchaseData = [
  { month: "Jan", orders: 2 },
  { month: "Feb", orders: 3 },
  { month: "Mar", orders: 4 },
  { month: "Apr", orders: 2 },
  { month: "May", orders: 5 },
  { month: "Jun", orders: 3 },
];

export default function UserProfile() {
  return (
    <div className="space-y-6">
      {/* Top User Info */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#173e72] p-6 rounded-xl shadow-lg"
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Profile Image */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-400 flex items-center justify-center text-white text-3xl font-bold">
            U
          </div>

          {/* User Info */}
          <div className="flex-1 space-y-2 text-center sm:text-left">
            <h2 className="text-2xl font-bold text-white">Md Shanto Sarkar</h2>
            <p className="text-gray-200">shanto@example.com</p>
            <div className="flex justify-center sm:justify-start gap-4 mt-2 text-gray-200 text-sm">
              <div className="flex items-center gap-1">
                <Mail size={14} /> shanto@example.com
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={14} /> Dhaka, Bangladesh
              </div>
            </div>
            <span className="mt-2 inline-block px-5 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
              User
            </span>
          </div>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
        <StatCard
          title="Products Bought"
          value="24"
          icon={<ShoppingCart size={26} />}
        />
        <StatCard
          title="Wishlist Items"
          value="10"
          icon={<Heart size={26} />}
        />
        <StatCard
          title="Delivered Orders"
          value="18"
          icon={<CheckCircle size={26} />}
        />
      </motion.div>

      {/* Chart */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#1c4c8b] text-white rounded-xl p-6 shadow"
      >
        <h3 className="font-semibold mb-4">Your Purchase Activity</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={purchaseData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="orders"
                stroke="#FFBB38"
                strokeWidth={3}
                dot={{ r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
}

function StatCard({ title, value, icon }) {
  return (
    <motion.div className="px-4 py-8 bg-[#1c4c8b] text-white rounded-lg shadow text-center">
      <div className="flex justify-center mb-2 text-yellow-500 text-2xl">
        {icon}
      </div>
      <div className="text-xs text-gray-300">{title}</div>
      <div className="text-xl font-bold mt-1">{value}</div>
    </motion.div>
  );
}
