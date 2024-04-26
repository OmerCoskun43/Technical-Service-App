import Carousell from "../components/Carousel";
import { FaWhatsapp } from "react-icons/fa6";

const HomePage = () => {
  return (
    <div className="relative border-2 container mx-auto rounded-lg border-black ">
      <Carousell />
      <a href="https://wa.me/905552524411" target="_blank">
        {" "}
        <FaWhatsapp className="fixed top-28 right-5 animate-pulse md:animate-none  md:top-28 md:right-10 text-[#65e44c]  cursor-pointer hover:text-[#7FFF00] text-7xl" />
      </a>
    </div>
  );
};

export default HomePage;
