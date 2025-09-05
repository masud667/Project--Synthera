import { FaTshirt, FaShoePrints, FaHatCowboy, FaRing, FaShoppingBag } from "react-icons/fa";

const categories = [
  { name: "Clothing", icon: <FaTshirt size={28} /> },
  { name: "Shoes", icon: <FaShoePrints size={28} /> },
  { name: "Accessories", icon: <FaHatCowboy size={28} /> },
  { name: "Jewelry", icon: <FaRing size={28} /> },
  { name: "Bags", icon: <FaShoppingBag size={28} /> },
];

export default function Categories() {
  return (
    <div className="w-full flex flex-wrap justify-center gap-6 p-6">
      {categories.map((cat, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center border shadow-sm">
            {cat.icon}
          </div>
          <p className="mt-2 text-sm">{cat.name}</p>
        </div>
      ))}
    </div>
  );
}
