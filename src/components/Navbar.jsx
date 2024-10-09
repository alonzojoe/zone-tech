import { useState } from "react";
import Logo from "../assets/images/logo.png";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const menus = [
  {
    id: 1,
    title: "Home",
    path: "",
  },
  {
    id: 2,
    title: "Services",
    path: "#services",
  },
  {
    id: 3,
    title: "How We Work",
    path: "#work",
  },
  {
    id: 4,
    title: "Our Team",
    path: "#team",
  },
  {
    id: 5,
    title: "Careers",
    path: "#careers",
  },
  {
    id: 6,
    title: "Blog",
    path: "#blog",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="relative">
      <div className="container flex items-center justify-between py-10">
        <div>
          <img className="h-[66px] w-[231px]" src={Logo} alt="zone-tech-logo" />
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-4">
            {menus.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 mx-2 text-xl group relative hover:text-secondary"
                >
                  {menu.title}
                  <div className="absolute h-0.5 left-0 bottom-0.5 w-full bg-secondary scale-x-0 group-hover:scale-100 transition-transform duration-200 origin-left"></div>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl cursor-pointer" onClick={toggleMenu} />
        </div>
      </div>

      {isOpen && (
        <div
          className={`fixed inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-start z-50 
    transition-opacity duration-500 ease-in-out ${
      isOpen ? "opacity-100" : "opacity-0"
    }`}
        >
          <IoMdClose
            className="absolute top-8 right-8 text-4xl cursor-pointer"
            onClick={toggleMenu}
          />
          <ul className="text-center mt-32">
            {menus.map((menu) => (
              <li key={menu.id} className="mb-8">
                <a
                  href={menu.path}
                  className="inline-block text-2xl font-semibold group relative hover:text-secondary"
                >
                  {menu.title}
                  <div className="absolute h-0.5 left-0 bottom-0.5 w-full bg-secondary scale-x-0 group-hover:scale-100 transition-transform duration-200 origin-left"></div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
