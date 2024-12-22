import { BiWorld } from "react-icons/bi";
import {
  MdOutlineKitchen,
  MdOutlineVilla,
  MdToys,
  MdWbSunny,
} from "react-icons/md";
import { TbBeach, TbMountain, TbPool, TbAirConditioning } from "react-icons/tb";
import {
  GiBoatFishing,
  GiCactus,
  GiFamilyHouse,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { FaBed, FaHome, FaSkiing } from "react-icons/fa";
import {
  FaWifi,
  FaSwimmingPool,
  FaDumbbell,
  FaTree,
  FaChair,
  FaCamera,
  FaFire,
  FaDog,
} from "react-icons/fa";
import { AiOutlineLock } from "react-icons/ai";
import {
  MdLocalParking,
  MdLocalLaundryService,
  MdOutlineBalcony,
  MdElevator,
} from "react-icons/md";
import { GiWaterDrop, GiBarbecue, GiElectric, GiTheater } from "react-icons/gi";

export const categories = [
  {
    label: "All",
    icon: <BiWorld />,
    color: "#bfdbfe",
  },
  {
    label: "Urban Area",
    icon: <MdOutlineVilla />,
    color: "#ffe4b5",
  },
  {
    label: "Seaside",
    icon: <TbBeach />,
    color: "#e9d5ff",
  },
  {
    label: "Wind Farm",
    icon: <GiWindmill />,
    color: "#d1fae5",
  },
  {
    label: "Rural Area",
    icon: <TbMountain />,
    color: "#ccfbf1",
  },
  {
    label: "Desert Retreat",
    icon: <GiCactus />,
    color: "#e5e7eb",
  },
  {
    label: "Private Island",
    icon: <GiIsland />,
    color: "#e0e7ff",
  },
  {
    label: "Ski Resorts",
    icon: <FaSkiing />,
    color: "#fef3c7",
  },
  {
    label: "Luxury Pools",
    icon: <TbPool />,
    color: "#cffafe",
  },
  {
    label: "Lakeside",
    icon: <GiBoatFishing />,
    color: "#bfbdfe",
  },
];

export const types = [
  {
    name: "Whole Home",
    description: "Enjoy complete privacy with the entire home to yourself",
    icon: <FaHome />,
  },
  {
    name: "Private Room",
    description: "Relax in your own room while sharing common areas.",
    icon: <FaBed />,
  },
  {
    name: "Guest Suite",
    description:
      "Experince comfort in a private suite within a larger property.",
    icon: <GiFamilyHouse />,
  },
  {
    name: "Shared Appartment",
    description: "Stay in cozy appartment with shared facilities.",
    icon: <GiIsland />,
  },
];

export const facilities = [
  {
    label: "Wi-Fi",
    icon: <FaWifi className="text-[#3498db]" />,
  },
  {
    label: "Air Conditioning",
    icon: <TbAirConditioning className="text-[#1abc9c]" />,
  },
  {
    label: "Heating",
    icon: <MdWbSunny className="text-[#e74c3c]" />,
  },

  {
    label: "Parking",
    icon: <MdLocalParking className="text-[#f39c12]" />,
  },
  {
    label: "Swimming Pool",
    icon: <FaSwimmingPool className="text-[#2980b9]" />,
  },
  {
    label: "Gym",
    icon: <FaDumbbell className="text-[#8e44ad]" />,
  },
  {
    label: "Garden",
    icon: <FaTree className="text-[#27ae60]" />,
  },
  {
    label: "Balcony",
    icon: <MdOutlineBalcony className="text-[#e67e22]" />,
  },
  {
    label: "Furnished",
    icon: <FaChair className="text-[#9b59b6]" />,
  },
  {
    label: "CCTV",
    icon: <FaCamera className="text-[#34495e]" />,
  },
  {
    label: "Elevator",
    icon: <MdElevator className="text-[#2ecc71]" />,
  },
  {
    label: "Playground",
    icon: <MdToys className="text-[#f1c40f]" />,
  },
  {
    label: "Fireplace",
    icon: <FaFire className="text-[#d35400]" />,
  },
  {
    label: "Dishwasher",
    icon: <MdOutlineKitchen className="text-[#16a085]" />,
  },
  {
    label: "Laundry Room",
    icon: <MdLocalLaundryService className="text-[#3498db]" />,
  },
  {
    label: "Security",
    icon: <AiOutlineLock className="text-[#2c3e50]" />,
  },
  {
    label: "Pet Friendly",
    icon: <FaDog className="text-[#e74c3c]" />,
  },
  {
    label: "Water Supply",
    icon: <GiWaterDrop className="text-[#1e90ff]" />,
  },
  {
    label: "Electricity Backup",
    icon: <GiElectric className="text-[#f39c12]" />,
  },
  {
    label: "Home Theater",
    icon: <GiTheater className="text-[#9b59b6]" />,
  },
  {
    label: "Barbecue Area",
    icon: <GiBarbecue className="text-[#e67e22]" />,
  },
];
