import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo4 from "../assets/logo4.png";
import { NavLink, useNavigate } from "react-router-dom";
import { GiWashingMachine } from "react-icons/gi";
import { PiTelevisionBold } from "react-icons/pi";
import Icon from "@mdi/react";
import { mdiDishwasher } from "@mdi/js";
import boiler from "../assets/boiler.png";

function NavList() {
  return (
    <ul className="pt-4 md:pt-0 md:my-2 flex flex-col gap-2 border-t-2 border-blue-800 md:border-none lg:mb-0 lg:mt-0 lg:flex-row lg:items-center ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          to="/kombi"
          className=" bg-white px-3 py-2 rounded-lg block w-full md:inline text-center text-xl md:text-sm  hover:bg-[#F012BE] hover:text-white  font-bold"
          style={({ isActive }) => {
            return {
              color: isActive ? "magenta" : "black",
              textDecoration: isActive ? "underline" : "none",
            };
          }}
        >
          Kombi
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          to="/bulasik"
          className=" bg-white px-3 py-2 rounded-lg hover:bg-[#F012BE] block w-full md:inline text-xl md:text-sm text-center hover:text-white  font-bold"
          style={({ isActive }) => {
            return {
              color: isActive ? "magenta" : "black",
              textDecoration: isActive ? "underline" : "none",
            };
          }}
        >
          Bulaşık Makinası
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          to="/camasir"
          className=" bg-white px-3 py-2 rounded-lg hover:bg-[#F012BE] block w-full md:inline text-xl md:text-sm text-center hover:text-white  font-bold"
          style={({ isActive }) => {
            return {
              color: isActive ? "magenta" : "black",
              textDecoration: isActive ? "underline" : "none",
            };
          }}
        >
          Çamaşır Makinası
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          to="/tv"
          className=" bg-white px-3 py-2 rounded-lg hover:bg-[#F012BE] block w-full md:inline text-xl md:text-sm text-center hover:text-white  font-bold"
          style={({ isActive }) => {
            return {
              color: isActive ? "magenta" : "black",
              textDecoration: isActive ? "underline" : "none",
            };
          }}
        >
          Televizyon
        </NavLink>
      </Typography>
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto bg-[#2EC8F7]  px-6 py-5 md:py-3">
      <div className="flex items-center justify-between  text-blue-gray-900">
        <div>
          <img
            onClick={() => navigate("/")}
            className="h-12  md:h-16 w-24 md:w-30 cursor-pointer"
            src={logo4}
            alt=""
          />
        </div>
        <div className="font-bold text-center ml-8 md:ml-0 px-1 text-sm md:text-xl  bg-black text-white md:px-2 md:py-1 rounded-lg">
          <h1>Kütahya Teknik Servis</h1>
          <p>0555 252 44 11</p>
        </div>
        <div className="gap-4 hidden md:flex justify-evenly items-center bg-white rounded-lg px-2 ">
          <GiWashingMachine size={50} className="cursor-pointer text-black  " />
          <PiTelevisionBold size={50} className="cursor-pointer text-black  " />
          <Icon path={mdiDishwasher} size={2} className="text-black" />
          <img src={boiler} alt="boiler" className=" w-[45px]" />
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent  lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
