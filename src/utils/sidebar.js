// icons
import { FaUserGraduate } from "react-icons/fa6";
import { AiOutlineBarChart, AiOutlinePieChart, AiOutlineTeam } from "react-icons/ai";
import { GrUserPolice } from "react-icons/gr";
// Components
import Analitika from "../pages/Analitika";
import Fakultet from "../pages/Fakultet";
import Admins from "../pages/Admins";
import Tutors from "../pages/Tutors";
import Baholash from "../pages/Baholash";

const sidebar = [
  {
    id: 1,
    title: "Analitka",
    path: "/analitka",
    icon: AiOutlinePieChart,
    isPrivate: true,
    element: Analitika,
    role: ["superAdmin"],
  },
  {
    id: 2,
    title: "Fakultetlar",
    path: "/fakultet",
    icon: AiOutlineTeam,
    isPrivate: true,
    element: Fakultet,
    role: ["superAdmin"],
  },
  {
    id: 3,
    title: "Adminlar",
    path: "/admin",
    icon: GrUserPolice,
    isPrivate: true,
    element: Admins,
    role: ["superAdmin"],
  },
  {
    id: 4,
    title: "Tyutorlar",
    path: "/tyutor",
    icon: FaUserGraduate,
    isPrivate: true,
    element: Tutors,
    role: ["superAdmin, admin"],
  },
  {
    id: 5,
    title: "Baholash",
    path: "/Baholash",
    icon: AiOutlineBarChart,
    isPrivate: true,
    element: Baholash,
    role: ["superAdmin"],
  },
]

export default sidebar;
