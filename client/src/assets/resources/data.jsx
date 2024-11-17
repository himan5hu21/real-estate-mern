import { BiWorld } from "react-icons/bi";
import { MdOutlineVilla } from "react-icons/md";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { GiBoatFishing, GiCactus, GiIsland, GiWindmill } from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";

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
