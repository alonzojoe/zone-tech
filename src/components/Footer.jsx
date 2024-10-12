import Logo from "../assets/images/logo.png";
import { IoBasketballOutline } from "react-icons/io5";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-8">
            <img
              className="h-[66px] w-[231px]"
              src={Logo}
              alt="zone-tech-logo"
            />
            <p className="text-lg text-lighter">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s
            </p>
            <div className="flex items-center gap-6">
              <div className="size-[45px] bg-lightPink rounded-full flex items-center justify-center cursor-pointer hover:scale-125 duration-200">
                <IoBasketballOutline className="text-2xl text-[#494B8C]" />
              </div>
              <div className="size-[45px] bg-lightPink rounded-full flex items-center justify-center cursor-pointer hover:scale-125 duration-200">
                <FaInstagram className="text-2xl text-[#494B8C] cursor-pointer" />
              </div>
              <div className="size-[45px] bg-lightPink rounded-full flex items-center justify-center cursor-pointer hover:scale-125 duration-200">
                <FaFacebookF className="text-2xl text-[#494B8C] cursor-pointer" />
              </div>
              <div className="size-[45px] bg-lightPink rounded-full flex items-center justify-center cursor-pointer hover:scale-125 duration-200">
                <FiTwitter className="text-2xl text-[#494B8C] cursor-pointer" />
              </div>
            </div>
          </div>
          <div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
