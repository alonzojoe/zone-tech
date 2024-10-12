import Logo from "../assets/images/logo.png";
import { IoBasketballOutline } from "react-icons/io5";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <div className="container py-14">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col space-y-6">
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
          <div className="flex justify-between">
            <div className="my-6">
              <a href="#" className="text-2xl text-secondary relative">
                About Us
                <div className="absolute h-0.5 left-0 -bottom-1 w-4/6 scale-100 bg-secondary"></div>
              </a>
              <ul className="py-8 space-y-2">
                <li>
                  <a href="#" className="text-lighter text-lg">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lighter text-lg">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lighter text-lg">
                    How We Work
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lighter text-lg">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lighter text-lg">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lighter text-lg">
                    blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="my-6">
              <a href="#" className="text-2xl text-secondary relative">
                Location
                <div className="absolute h-0.5 left-0 -bottom-1 w-4/6 scale-100 bg-secondary"></div>
              </a>
              <ul className="py-8 space-y-2">
                <li>
                  <a href="#" className="text-lighter text-lg">
                    230, 3891 Ranchview, California 62639
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lighter text-lg">
                    230, 3891 Ranchview, California 62639
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lighter text-lg">
                    230, 3891 Ranchview, California 62639
                  </a>
                </li>
              </ul>
            </div>
            <div className="my-6">
              <a href="#" className="text-2xl text-secondary relative">
                Contact
                <div className="absolute h-0.5 left-0 -bottom-1 w-4/6 scale-100 bg-secondary"></div>
              </a>
              <ul className="py-8 space-y-2">
                <li>
                  <a href="#" className="text-lighter text-lg">
                    +91 85225 85225
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lighter text-lg">
                    +91 94064 78893
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lighter text-lg">
                    Zontech@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lighter text-lg">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lighter text-lg">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lighter text-lg">
                    blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
